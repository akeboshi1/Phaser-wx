import { UISCENE } from "../main";

export class UIScene extends Phaser.Scene {
    constructor() {
        super();
        this.key = UISCENE;
        // console.log("uiscene init");
    }
    init(data) {
        this.dragonbone = data.display;
    }

    preload() {
        this.load.image("btn", "images/bullet.png");
    }
    create() {
        // console.log("uiscene create");
        // const con = this.make.container();
        // this.img = this.make.image({ key: "btn" });
        // con.setPosition(100,100);
        // con.add(this.img);
        // con.setSize(this.img.width, this.img.height);
        // // con.setScale(2);
        // con.setInteractive();
        // con.on("pointerdown", this.pointerDownHandler, this);



        this.mBackground = this.add.graphics({ x: 100, y: 50 });
        this.mBackground.fillStyle(0x0000, 1);
        this.mBackground.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        this.mBackground.on("pointerdown", this.pointerDownHandler, this);

        this.mAttackBtn = this.add.graphics({ x: 200, y: 50 });
        this.mAttackBtn.fillStyle(0xffcc00, 1);
        this.mAttackBtn.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        this.mAttackBtn.on("pointerdown", this.pointerAttackHandler, this);
    }

    update() {

    }

    pointerDownHandler() {
        if (this.dragonbone) this.dragonbone.scaleX *= -1;
    }

    pointerAttackHandler() {
        this.events.emit("attack")
    }
}