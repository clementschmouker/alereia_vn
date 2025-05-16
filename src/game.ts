import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { SobelOperatorShader } from 'three/examples/jsm/shaders/SobelOperatorShader.js';
import { OutlinePass } from 'three/examples/jsm/Addons.js';

import Player from './player';


class Game {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    composer: EffectComposer;
    player: Player;
    renderBlack: boolean;
    raycaster: THREE.Raycaster;
    cityModel: THREE.Object3D;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.y = 1;
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.domElement.id = 'game-canvas';
        this.renderBlack = false;
        this.raycaster = new THREE.Raycaster();


        // Lighting
        const Dirlight = new THREE.DirectionalLight(0xffffff, 1);
        const light = new THREE.AmbientLight(0xffffff, 0.1);
        Dirlight.position.set(5, 10, 7.5);
        // this.scene.add(light);
        this.scene.add(Dirlight);


        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        // Shader
        const renderPass = new RenderPass(this.scene, this.camera);

        const sobelPass = new ShaderPass(SobelOperatorShader);
        sobelPass.uniforms['resolution'].value.x = window.innerWidth * window.devicePixelRatio;
        sobelPass.uniforms['resolution'].value.y = window.innerHeight * window.devicePixelRatio;

        const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera);
        outlinePass.edgeStrength = 10;  // Control the thickness of the outline
        outlinePass.edgeGlow = 1.0;     // Glow around the outline (set to 0 for no glow)
        outlinePass.visibleEdgeColor.set(0x000000);  // Black color for the outline
        outlinePass.hiddenEdgeColor.set(0x000000);   // Set hidden edge color to black as well

        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(renderPass);
        this.composer.addPass(sobelPass);
        this.composer.addPass(outlinePass);

        // Player
        this.player = new Player();
        this.scene.add(this.player.mesh);
    }
    
    start = () => {
        const loader = new GLTFLoader();

        // Replace this path with your actual model path
        loader.load('models/town4new.glb', (gltf: any) => {
            gltf.scene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    const originalMaterial = mesh.material as THREE.MeshStandardMaterial;
                
                    // --- Toon shading (your code)
                    const newMaterial = originalMaterial.clone();
                    newMaterial.onBeforeCompile = (shader) => {
                        shader.fragmentShader = shader.fragmentShader.replace(
                            '#include <lights_phong_fragment>',
                            `
                            vec3 lightDir = normalize(directionalLights[0].direction);
                            float diff = max(dot(normal, lightDir), 0.0);
                            diff = floor(diff * 4.0) / 4.0;
                            vec3 lighting = diff * directionalLights[0].color.rgb;
                            reflectedLight.directDiffuse = lighting;
                            `
                        );
                    };
                    mesh.material = newMaterial;
                
                    // --- Outline mesh
                    const outlineMaterial = new THREE.MeshBasicMaterial({
                        color: 0x000000,
                        side: THREE.BackSide
                    });
                    const outlineMesh = new THREE.Mesh(mesh.geometry, outlineMaterial);
                    outlineMesh.position.copy(mesh.position);
                    outlineMesh.rotation.copy(mesh.rotation);
                    outlineMesh.scale.copy(mesh.scale).multiplyScalar(1.03);
                    this.scene.add(outlineMesh);
                }
            });
            
            this.cityModel = gltf.scene;
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

    animate = () => {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.player.update();
        this.camera.position.set(this.player.position.x, 0.75, this.player.position.z + 2);
        this.camera.lookAt(this.player.position);

        const origin = new THREE.Vector3(this.player.position.x, this.player.position.y, this.player.position.z);
        const direction = new THREE.Vector3(0, -1, 0);
        this.raycaster.set(origin, direction);
        
        const intersects = this.raycaster.intersectObject(this.cityModel, true);
        
        if (intersects.length > 0) {
            const currentY = this.player.position.y - (this.player.size.y / 2);
            const targetY = intersects[0].point.y + 0.05;
            this.player.position.y += (targetY - currentY) * 0.1; // interpolate
        }
        


        if (this.renderBlack) {
            this.composer.render();
        } else {
            this.renderer.render(this.scene, this.camera);

        }
    }
}

export default Game;