import * as THREE from 'three';
import gsap from 'gsap';


class Player {
    public position: THREE.Vector3;
    public size: THREE.Vector3;
    public mesh: THREE.Mesh;
    public direction: 1 | 0 | -1;
    public speed: number;
    public canMove: boolean = true;
    public isRunning: boolean = false;
    public facingDirection: 1 | -1;
    private currentSpriteTile = 0;
    private tileHoriz = 8;
    private tileVert = 2;
    private spriteOffsetX: number = 0;
    private spriteOffsetY: number = 0;
    private spriteMap: any;
    private playSpriteIndices: number[] = [];
    private runningTileArrayIndex = 0;
    private maxDisplayTime = 0;
    private elapsedTime = 0;

    constructor(startingPosition: THREE.Vector3 = new THREE.Vector3(0, 0.5, -7.15)) {
        this.position = startingPosition.clone();
        this.size = new THREE.Vector3(1, 0.9, 1);
        this.direction = 0;
        this.facingDirection = 1;
        this.speed = 0.2;

        const planeGeometry = new THREE.PlaneGeometry(this.size.x, this.size.y);
        const material = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });

        this.spriteMap = new THREE.TextureLoader().load('images/vangvasprite/spritevangva.png');
        this.spriteMap.magFilter = THREE.NearestFilter;
        this.spriteMap.repeat.set(1/this.tileHoriz, 1/this.tileVert);


        const spriteMaterial = new THREE.SpriteMaterial({
            map: this.spriteMap,
            blending: THREE.NormalBlending
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        this.loop([8, 9, 10, 11, 12, 13, 14, 15], 0.8);


        this.mesh = new THREE.Mesh(planeGeometry, material);
        this.mesh.add(sprite);
    }

    move = () => {
        gsap.to(this.position, {
            x: this.position.x + (this.direction * this.speed),
            ease: 'Power4.inOut',
        });
    }

    public loop(playSpriteIndecies: number[], totalDuration: number) {
        this.playSpriteIndices = playSpriteIndecies;
        this.runningTileArrayIndex = 0;
        this.currentSpriteTile = playSpriteIndecies[this.runningTileArrayIndex];
        this.maxDisplayTime = totalDuration / this.playSpriteIndices.length;
    }

    public update = (delta: number) => {
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        if (this.canMove) {
            this.move();
        }
        this.elapsedTime += delta;
        if (this.maxDisplayTime > 0 && this.elapsedTime >= this.maxDisplayTime) {
            this.elapsedTime = 0;
            this.runningTileArrayIndex = (this.runningTileArrayIndex + 1) % this.playSpriteIndices.length;
            this.currentSpriteTile = this.playSpriteIndices[this.runningTileArrayIndex];

            this.spriteOffsetX = (this.currentSpriteTile % this.tileHoriz) / this.tileHoriz;
            this.spriteOffsetY = (this.tileVert - Math.floor(this.currentSpriteTile / this.tileHoriz) - 1) / this.tileVert;
            this.spriteMap.offset.x = this.spriteOffsetX;
            this.spriteMap.offset.y = this.spriteOffsetY;
        }

        if (this.facingDirection === -1) {
            this.spriteMap.repeat.x = -1 / this.tileHoriz;
            this.spriteMap.offset.x = (this.spriteOffsetX + 1 / this.tileHoriz); // shift right to compensate
        } else {
            this.spriteMap.repeat.x = 1 / this.tileHoriz;
            this.spriteMap.offset.x = this.spriteOffsetX;
        }

        if (this.isRunning) {
            this.currentSpriteTile += 1;
            if (this.currentSpriteTile > 7) {
                this.currentSpriteTile = 0;
            }
        }
    }
}

export default Player;