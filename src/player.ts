import * as THREE from 'three';
import gsap from 'gsap';


class Player {
    position: THREE.Vector3;
    size: THREE.Vector3;
    mesh: THREE.Mesh;
    direction: 1 | 0 | -1;
    speed: number;

    constructor() {
        this.position = new THREE.Vector3(0, 0.5, -7.15);
        this.size = new THREE.Vector3(1, 1, 1);
        this.direction = 0;
        this.speed = 0.2;

        const planeGeometry = new THREE.PlaneGeometry(this.size.x, this.size.y);
        const material = new THREE.MeshBasicMaterial(0xffffff);

        this.mesh = new THREE.Mesh(planeGeometry, material);
    }


    move = () => {
        gsap.to(this.position, {
            x: this.position.x + (this.direction * this.speed),
            ease: 'Power4.inOut',
        });
    }

    update = () => {
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.move();
    }
}

export default Player;