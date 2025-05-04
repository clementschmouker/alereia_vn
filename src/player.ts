import * as THREE from 'three';


class Player {
    position: THREE.Vector3;
    mesh: THREE.Mesh;

    constructor() {
        this.position = new THREE.Vector3(0, 0, 0);

        const planeGeometry = new THREE.PlaneGeometry();
        const material = new THREE.MeshBasicMaterial(0xffffff);

        this.mesh = new THREE.Mesh(planeGeometry, material);
    }


    move = (direction: 1 | 0 | -1) => {
        this.position.x += direction;
    }

    update = () => {
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
    }
}

export default Player;