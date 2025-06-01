import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

import Player from './components/player';

import Trigger from './components/trigger';

import triggersList from './triggersList';
import { audioChannelSound } from './globals';


const solidify = (mesh: THREE.Mesh) => {
    const THICKNESS = 0.02;
    const geometry = mesh.geometry?.clone();
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
    solidifiedMesh.position.copy(mesh.position);
    if (mesh.name === "Cylinder002_Material001_0") {
        solidifiedMesh.geometry.scale(0.213, 0.213, 0.213);
    }
    solidifiedMesh.rotation.x = Math.PI / 2;

    solidifiedMesh.scale.setScalar(1.0001);
    return solidifiedMesh;
}


class Game {
    public paused: boolean;
    public stoped: boolean;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private controls: OrbitControls;
    private cityModel: THREE.Object3D | null;
    private player: Player;
    private raycaster: THREE.Raycaster;
    private collidableObjects: THREE.Object3D[];
    private triggers: Trigger[];
    private clock: THREE.Clock;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.y = 1;
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector('#game-container')?.appendChild(this.renderer.domElement);
        this.renderer.domElement.id = 'game-canvas';
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.NoToneMapping;
        this.paused = false;
        this.stoped = true;
        this.triggers = [];
        const textureLoader = new THREE.TextureLoader();
        const backgroundTexture = textureLoader.load('images/decors/skybox.png');
        this.scene.background = backgroundTexture;
        this.cityModel = null;
        this.clock = new THREE.Clock();

        this.raycaster = new THREE.Raycaster();
        this.collidableObjects = [];

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        // Player
        const startingPlayerPosition = new THREE.Vector3(-50, 0.5, -7.15);
        this.player = new Player(startingPlayerPosition);
        this.scene.add(this.player.mesh);

        this.player.loop([8, 9, 10, 11, 12, 13, 14, 15], 1.5);

        // Triggers
        triggersList.forEach(triggerData => {
            let newTrigger = new Trigger(
                new THREE.Vector3(triggerData.position, 0.5, -7.15),
                new THREE.Vector3(1, 1, 1),
                triggerData.action,
                triggerData.debug,
                triggerData.stays
            );
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
        document.querySelector('#game-container')!.innerHTML = '';
        document.querySelector('#go-back')!.classList.remove('hidden');
    }
    
    start = () => {
        this.stoped = false;
        document.querySelector('#go-back')?.classList.add('hidden');
        const loader = new GLTFLoader();
        loader.load('models/town4new.glb', (gltf: any) => {
            this.cityModel = gltf.scene;
            gltf.scene.traverse((child: THREE.Mesh) => {
                if ((child).isMesh) {
                    const mesh = child as THREE.Mesh;
                    const originalMaterial = mesh.material as THREE.MeshStandardMaterial;

                    const shaderMaterial = new THREE.ShaderMaterial({
                        uniforms: {
                            baseTexture: { value: originalMaterial.map },
                            lightIntensity: { value: 1.0 }
                        },
                        vertexShader: `
                            varying vec3 vNormal;
                            varying vec2 vUv;
                            void main() {
                                vNormal = normalize(normalMatrix * normal);
                                vUv = uv;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `,
                        fragmentShader: `
                            uniform sampler2D baseTexture;
                            varying vec3 vNormal;
                            varying vec2 vUv;

                            void main() {
                                vec3 lightDirection = normalize(vec3(0.5, 1.0, 0.75));
                                float lightFactor = max(dot(vNormal, lightDirection), 0.4);

                                vec4 baseColor = texture2D(baseTexture, vUv);
                                vec3 litColor = mix(vec3(1.0, 0.0, 1.0), vec3(0.0, 1.0, 1.0), lightFactor);

                                gl_FragColor = vec4(baseColor.rgb * litColor, baseColor.a);
                            }
                        `,
                        side: THREE.DoubleSide,
                    });

                    mesh.material = shaderMaterial;
                }
                const outline = solidify(child);
                this.scene.add(outline);

                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;

                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    this.collidableObjects.push(mesh);
                }
            })
            
            this.scene.add(gltf.scene);
            
            this.animate();
        }, undefined, (error: any) => {
            console.error('Error loading model:', error);
        });

        addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight' && this.paused === false && this.stoped === false) {
                this.player.direction = 1;
                this.player.facingDirection = 1;
                if (this.player.isRunning === false) {
                    this.player.loop([0, 1, 2, 3, 4, 5, 6, 7], 0.8);
                }
                this.player.isRunning = true;
                if (audioChannelSound.paused) {
                    audioChannelSound.src = 'audio/bruitages/course.mp3';
                    audioChannelSound.currentTime = 0;
                    audioChannelSound.loop = true;
                    audioChannelSound.play();
                }
            }
            if (event.key === 'ArrowLeft' && this.paused === false && this.stoped === false) {
                this.player.direction = -1;
                this.player.facingDirection = -1;
                if (this.player.isRunning === false) {
                    this.player.loop([0, 1, 2, 3, 4, 5, 6, 7], 0.8);
                }
                this.player.isRunning = true;
                if (audioChannelSound.paused) {
                    audioChannelSound.src = 'audio/bruitages/course.mp3';
                    audioChannelSound.currentTime = 0;
                    audioChannelSound.loop = true;
                    audioChannelSound.play();
                }
            }
        });

        addEventListener('keyup', (event) => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                this.player.direction = 0;
                this.player.loop([8, 9, 10, 11, 12, 13, 14, 15], 0.8);
                this.player.isRunning = false;
                audioChannelSound.pause();
                audioChannelSound.src = '';
                audioChannelSound.loop = false;
                audioChannelSound.currentTime = 0;
            }
        })

        
    }

    checkCollisions = () => {
        const playerPosition = this.player.position.clone();
        const direction = new THREE.Vector3(0, 0, -0.1);
        this.raycaster.set(playerPosition, direction);

        const intersects = this.raycaster.intersectObjects(this.collidableObjects, true);
        if (intersects.length > 0) {
            this.player.position.y += 0.1;
        }
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.controls.update();
        let deltaTime = this.clock.getDelta();

        const origin = new THREE.Vector3(this.player.position.x, this.player.position.y, this.player.position.z);
        const direction = new THREE.Vector3(0, -1, 0);
        this.raycaster.set(origin, direction);
        
        let intersects: any[] = [];

        if (this.cityModel) {
            intersects = this.raycaster.intersectObject(this.cityModel, true);
        }
        
        if (intersects.length > 0) {
            const currentY = this.player.position.y - (this.player.size.y / 2);
            const targetY = intersects[0].point.y + 0.05;
            this.player.position.y += (targetY - currentY) * 0.1;
        }
        
        this.camera.position.set(this.player.position.x, 0.75, this.player.position.z + 2);
        this.camera.lookAt(this.player.position);
        this.player.update(deltaTime);
        this.triggers.forEach((trigger: Trigger) => {
            if (trigger.isColliding(this.player.position) && trigger.triggered === false) {
                trigger.triggered = true;
                
                if (!trigger.stays) {
                    this.scene.remove(trigger.mesh);
                } else {
                    this.player.position.x = this.player.position.x + 1;
                    trigger.triggered = false;
                }

                trigger.action();
            }
        });

        this.renderer.render(this.scene, this.camera);
    }
}

export default Game;