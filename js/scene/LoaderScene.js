export class LoaderScene extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image("star", "https://osd-alpha.tooqing.com/avatar/part/barm_weap_61d7de0ebdc7560011839ac7_1_2.png");
        // this.load.atlas();
    }

    init() {

    }

    create() {
        this.img = this.add.image(0, 0, "star");
        this.img.setScale(2);
        this.img.setPosition(100, 100);
    }

    update() {
        if (this.img.rotation >= 360) this.img.rotation = 0;
        this.img.rotation += 10;
    }
}