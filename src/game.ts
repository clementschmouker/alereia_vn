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

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.y = 1;
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.domElement.id = 'game-canvas';

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
        this.composer.addPass(outlinePass);
        this.composer.addPass(sobelPass);

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
            
                    // Clone the material to avoid affecting shared instances
                    const newMaterial = originalMaterial.clone();
            
                    newMaterial.onBeforeCompile = (shader) => {
                        // Inject custom toon-like lighting logic into fragment shader
                        shader.fragmentShader = shader.fragmentShader.replace(
                            '#include <lights_phong_fragment>',
                            `
                            vec3 lightDir = normalize(directionalLights[0].direction);
                            float diff = max(dot(normal, lightDir), 0.0);
                            diff = floor(diff * 4.0) / 4.0; // posterize
                            vec3 lighting = diff * directionalLights[0].color.rgb;
                            reflectedLight.directDiffuse = lighting;
                            `
                        );
                    };
            
                    mesh.material = newMaterial;
                }
            });
            
            this.scene.add(gltf.scene);
            this.animate();
        }, undefined, (error: any) => {
            console.error('Error loading model:', error);
        });

        addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.player.move(1);
            }
            if (event.key === 'ArrowLeft') {
                this.player.move(-1);
            }
        })
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.player.update();
        this.camera.position.set(this.player.position.x, 2, 5);
        this.camera.lookAt(this.player.position);
        // this.composer.render();

        this.renderer.render(this.scene, this.camera);
    }
}

export default Game;