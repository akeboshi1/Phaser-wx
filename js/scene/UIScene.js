export class UIScene extends Phaser.Scene {
    constructor() {
        super();
        this.key = "UISCENE"
        console.log("uiscene init");
    }
    init(data) {
        this.dragonbone = data.display;
    }

    preload(){
        this.load.image("btn", "images/bullet.png");
    }
    create() {
        console.log("uiscene create");
        const con = this.make.container();
        this.img = this.add.image(0, 0, "btn");
        con.setPosition(100,100);
        con.add(this.img);
        con.setSize(this.img.width, this.img.height);
        // con.setScale(2);
        con.setInteractive();
        con.on("pointerdown", this.pointerDownHandler, this);



        // this.mBackground = this.add.graphics({ x: 100, y: 50 });
        // this.mBackground.fillStyle(0x0000, 1);
        // this.mBackground.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        // this.mBackground.on("pointerdown", this.pointerDown, this);
    }

    pointerDownHandler() {
        if (this.dragonbone) this.dragonbone.scaleX *= -1;
    }
}