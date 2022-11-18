import { HEIGHT, WIDTH } from "./main";

export class UIScene extends Phaser.Scene {
    constructor() {
        super();
    }

    // init(data) {

    // }

    create() {
        this.mAttack = this.add.graphics({ x: WIDTH - 50 >> 1, y: HEIGHT - 150 });
        this.mAttack.fillStyle(0xffccff, 1);
        this.mAttack.fillRect(0, 0, 50, 50).setInteractive(new Phaser.Geom.Rectangle(0, 0, 50, 50), Phaser.Geom.Rectangle.Contains);

        this.mUp = this.add.graphics({ x: WIDTH - 50 >> 1, y: HEIGHT - 200 });
        this.mUp.fillStyle(0x0000, 1);
        this.mUp.fillRect(0, 0, 50, 50).setInteractive(new Phaser.Geom.Rectangle(0, 0, 50, 50), Phaser.Geom.Rectangle.Contains);
        // this.mUp.on("pointerdown", this.pointerDownHandler, this);

        this.mLeft = this.add.graphics({ x: (WIDTH - 50) / 2 - 50, y: HEIGHT - 150 });
        this.mLeft.fillStyle(0xffcc00, 1);
        this.mLeft.fillRect(0, 0, 50, 50).setInteractive(new Phaser.Geom.Rectangle(0, 0, 50, 50), Phaser.Geom.Rectangle.Contains);
        // this.mLeft.on("pointerdown", this.pointerAttackHandler, this);


        this.mDown = this.add.graphics({ x: WIDTH - 50 >> 1, y: HEIGHT - 100 });
        this.mDown.fillStyle(0xffffff, 1);
        this.mDown.fillRect(0, 0, 50, 50).setInteractive(new Phaser.Geom.Rectangle(0, 0, 50, 50), Phaser.Geom.Rectangle.Contains);
        // this.mDown.on("pointerdown", this.pointerShareHandler, this);

        this.mRight = this.add.graphics({ x: (WIDTH - 50) / 2 + 50, y: HEIGHT - 150 });
        this.mRight.fillStyle(0x00ff00, 1);
        this.mRight.fillRect(0, 0, 50, 50).setInteractive(new Phaser.Geom.Rectangle(0, 0, 50, 50), Phaser.Geom.Rectangle.Contains);
        // this.mRight.on("pointerdown", this.pointerMusicHandler, this);
    }

    // get Attack() {
    //     return this.mAttack;
    // }

    // get Down() {
    //     return this.mDown;
    // }

    // get Up() {
    //     return this.mUp;
    // }

    // get Left() {
    //     return this.mLeft;
    // }

    // get right() {
    //     return this.mRight;
    // }
}