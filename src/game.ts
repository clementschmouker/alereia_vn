import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

import Player from './player';

import Trigger from './trigger';

import triggersList from './triggersList';


const solidify = (mesh: THREE.Mesh) => {
    const THICKNESS = 0.02;
    const geometry = mesh.geometry;
    const material = new THREE.ShaderMaterial({
        vertexShader: `
            void main() {
                vec3 newPosition = position + normal * ${THICKNESS};
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1);
            }
        `,
        fragmentShader: `
            void main() {
                gl_FragColor = vec4(0, 0, 0, 1); // Solid black color
            }`,

        side: THREE.BackSide,
    });

    const solidifiedMesh = new THREE.Mesh(geometry, material);
    solidifiedMesh.rotation.x = Math.PI / 2; // Adjust rotation as needed

    solidifiedMesh.scale.setScalar(1.0001);
    return solidifiedMesh;
}


class Game {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    cityModel: THREE.Object3D;
    composer: EffectComposer;
    player: Player;
    renderBlack: boolean;
    raycaster: THREE.Raycaster;
    collidableObjects: THREE.Object3D[];
    paused: boolean;
    stoped: boolean;
    triggers: Trigger[];

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.y = 1;
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector('#game-container').appendChild(this.renderer.domElement);
        console.log(this.renderer.domElement);
        this.renderer.domElement.id = 'game-canvas';
        this.renderBlack = false;
        this.paused = false;
        this.stoped = true;
        this.triggers = [];

        this.raycaster = new THREE.Raycaster();
        this.collidableObjects = [];

        // Lighting
        const Dirlight = new THREE.DirectionalLight(0xffffff, 1);
        const light = new THREE.AmbientLight(0xffffff, 0.1);
        Dirlight.position.set(5, 10, 7.5);
        // this.scene.add(light);
        this.scene.add(Dirlight);


        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        // Player
        this.player = new Player();
        this.scene.add(this.player.mesh);

        // Triggers
        triggersList.forEach(triggerData => {
            let newTrigger = new Trigger(new THREE.Vector3(triggerData.position, 0.5, -7.15), new THREE.Vector3(1, 1, 1), triggerData.action);
            this.triggers.push(newTrigger);
            this.scene.add(newTrigger.mesh);
        });
    }

    pause = () => {
        this.paused = true;
        this.player.canMove = false;
    }

    play = () => {
        this.paused = false;
        this.player.canMove = true;
    }

    stop = () => {
        this.paused = true;
        this.stoped = true;
        this.player.canMove = false;
        this.scene.clear();
        this.renderer.dispose();
        this.controls.dispose();
        this.collidableObjects = [];
        document.querySelector('#game-container').innerHTML = '';
    }
    
    start = () => {
        this.stoped = false;
        const loader = new GLTFLoader();
        loader.load('models/town4new.glb', (gltf: any) => {
            this.cityModel = gltf.scene;
            gltf.scene.traverse((child) => {
                const material = new THREE.MeshToonMaterial({
                    color: 0xffffff,
                })
                const outline = solidify(child);
                // child.material = material;
                this.scene.add(outline);

                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    this.collidableObjects.push(mesh);
                }
            })
            
            this.scene.add(gltf.scene);
            
            this.animate();
        }, undefined, (error: any) => {
            console.error('Error loading model:', error);
        });

        addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.player.direction = 1;
            }
            if (event.key === 'ArrowLeft') {
                this.player.direction = -1;
            }
            if (event.key === 'z') {
                this.renderBlack = true;
            }
        });

        addEventListener('keyup', (event) => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                this.player.direction = 0;
            }
            if (event.key === 'z') {
                this.renderBlack = false;
            }
        })

        
    }

    checkCollisions = () => {
        const playerPosition = this.player.position.clone();
        const direction = new THREE.Vector3(0, 0, -0.1); // Adjust direction as needed
        this.raycaster.set(playerPosition, direction);

        const intersects = this.raycaster.intersectObjects(this.collidableObjects, true);
        if (intersects.length > 0) {
            this.player.position.y += 0.1; // Move the player up slightly
        }
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.controls.update();

        const origin = new THREE.Vector3(this.player.position.x, this.player.position.y, this.player.position.z);
        const direction = new THREE.Vector3(0, -1, 0);
        this.raycaster.set(origin, direction);
        
        const intersects = this.raycaster.intersectObject(this.cityModel, true);
        
        if (intersects.length > 0) {
            const currentY = this.player.position.y - (this.player.size.y / 2);
            const targetY = intersects[0].point.y + 0.05;
            this.player.position.y += (targetY - currentY) * 0.1; // interpolate
        }
        
        this.camera.position.set(this.player.position.x, 0.75, this.player.position.z + 2);
        this.camera.lookAt(this.player.position);
        this.player.update();
        this.triggers.forEach(trigger => {
            if (trigger.isColliding(this.player.position) && trigger.triggered === false) {
                // Handle collision logic here
                trigger.triggered = true;
                trigger.action();
                this.scene.remove(trigger.mesh);
            }
        });

        if (this.renderBlack) {
            // this.composer.render();
        } else {
            this.renderer.render(this.scene, this.camera);
        }
    }
}

export default Game;