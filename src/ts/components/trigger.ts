import * as THREE from 'three';

class Trigger {
    position: THREE.Vector3;
    size: THREE.Vector3;
    mesh: THREE.Mesh;
    stays: boolean = false;
    triggered: boolean = false;
    debug: boolean = false;
    action: () => void;

    constructor(position: THREE.Vector3, size: THREE.Vector3, action: () => void, debug: boolean = false, stays: boolean = false) {
        this.position = new THREE.Vector3();
        this.size = new THREE.Vector3();
        this.size.copy(size);
        this.position.copy(position);
        this.action = action;
        this.debug = debug;
        this.stays = stays;

        const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: debug ? 0.5 : 0 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(this.position);
    }

    isColliding(playerPosition: THREE.Vector3): boolean {
        const halfSize = new THREE.Vector3(this.size.x / 2, this.size.y / 2, this.size.z / 2);
        const min = this.position.clone().sub(halfSize);
        const max = this.position.clone().add(halfSize);

        return (playerPosition.x >= min.x && playerPosition.x <= max.x &&
                playerPosition.y >= min.y && playerPosition.y <= max.y &&
                playerPosition.z >= min.z && playerPosition.z <= max.z);
    }
} 

export default Trigger;