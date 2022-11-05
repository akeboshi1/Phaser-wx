export class UIScene extends Phaser.Scene {
    constructor() {
        super();
    }
    init(data) {
        this.dragonbone = data.display;
    }
    create() {
        this.mBackground = this.add.graphics({ x: 100, y: 50 });
        this.mBackground.fillStyle(0x0ffcc, 0.6);
        this.mBackground.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        this.mBackground.on("pointerdown", this.pointerDown, this);
    }

    pointerDown() {
        if (this.dragonbone) this.dragonbone.scaleX *= -1;
    }
}