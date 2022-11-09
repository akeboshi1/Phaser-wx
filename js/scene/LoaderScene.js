import { HEIGHT, LOADERSCENE, UISCENE, WIDTH } from "../main";

export class LoaderScene extends Phaser.Scene {
    constructor() {
        super();
        this.key = LOADERSCENE;
    }

    preload() {
        // this.load.setBaseURL("http://127.0.0.1:64438/");
        this.load.image("testpng", "images/bullet.png");
        this.load.image("bg", "images/bg.jpg");
        // this.load.image("star", "https://osd-alpha.tooqing.com/avatar/part/barm_weap_61d7de0ebdc7560011839ac7_1_2.png");
        // this.load.image("dragonbone","images/dragonbones/bones_human01_tex.png");
        // this.load.json("json", "images/dragonbones/bones_human01_tex.json");
        // this.load.binary("bind", "images/dragonbones/bones_human01_ske.dbbin");
        this.load.dragonbone(
            "bones_human01",
            "images/dragonbones/bones_human01_tex.png",
            "images/dragonbones/bones_human01_tex.json",
            "images/dragonbones/bones_human01_ske.dbbin",
            null,
            null,
            { responseType: "arraybuffer" }
        );

    }

    init() {

    }

    create() {

        const bg = this.add.image(0, 0, "bg");
        bg.setScale(3, 5);
        this.con = this.make.container();
        this.con.setPosition(300, 300);
        this.img = this.add.image(0, 0, "testpng");
        this.con.add(this.img);
        this.con.setSize(this.img.width, this.img.height);
        this.con.setScale(3);
        this.con.setInteractive();


        this.mArmatureDisplay = this.add.armature(
            "Armature",
            "bones_human01",
        )
            .setDepth(1);
        this.mArmatureDisplay.animation.play("idle");

        this.mArmatureDisplay.x = this.cameras.main.centerX;
        this.mArmatureDisplay.y = this.cameras.main.centerY + 200;
        this.mArmatureDisplay.scale = 3;

        this.dragonBones = [];
        this.actions = ["idle", "walk", "attack", "run"];
        for (let i = 0; i < 10; i++) {
            const dragonBone = this.add.armature(
                "Armature",
                "bones_human01",
            );
            dragonBone.setDepth(1);
            const randomX = Math.random() > 0.5 ? 1 : -1;
            const randomY = Math.random() > 0.5 ? 1 : -1;
            dragonBone.x = this.cameras.main.centerX + randomX * Math.random() * WIDTH / 2;
            dragonBone.y = this.cameras.main.centerY + randomY * Math.random() * HEIGHT / 2;

            const action = this.actions[Math.floor(Math.random() * this.actions.length)];
            dragonBone.animation.play(action)
            this.dragonBones.push(dragonBone);
        }


        this.dragonBones.forEach((dragonBone) => {
            this.tweens.add({
                targets: dragonBone,
                // rotation: Math.PI*2,
                scale:2,
                ease: 'Sine',
                duraton: 1000,
                yoyo: true,
                repeat: -1
            });
        });


        const uiScene = this.game.scene.getScene(UISCENE);
        uiScene.events.on("attack", this.fire, this);
        this.scene.launch(UISCENE, { display: this.mArmatureDisplay });
        this.input.setDraggable(this.con);
        this.input.on("pointerdown", this.pointerDownHandler, this);
        this.input.on("pointerup", this.pointerUpHandler, this);
        // this.input.on("pointermove", this.pointerMoveHandler, this);

        this.input.on("drag", this.pointerMoveHandler, this);
    }

    update() {
        if (this.con.rotation >= 360) this.con.rotation = 0;
        this.con.rotation += 10;
    }

    fire() {
        const base = new Phaser.Geom.Point(this.mArmatureDisplay.x, this.mArmatureDisplay.y);
        let self = this;
        this.dragonBones.forEach((dragonBone) => {
            const bullect = self.make.image({ key: "testpng" });
            bullect.setPosition(this.mArmatureDisplay.x, this.mArmatureDisplay.y);
            const angle = Math.atan2((dragonBone.y - this.mArmatureDisplay.y), (dragonBone.x - this.mArmatureDisplay.x)) * 180 / Math.PI - 270;
            bullect.angle = angle;
            this.tweens.add({
                targets: bullect,
                x: dragonBone.x,
                y: dragonBone.y,
                ease: 'line',
                duraton: 200,
                onComplete: () => {
                    bullect.destroy();
                }
            });
        });
        console.log("fire--->");
    }

    pointerDownHandler(pointer) {
        if (this.tween && this.tween.callbacks) {
            this.tween.destroy();
            this.tween = null;
        }
        this.tween = this.tweens.add({
            targets: this.mArmatureDisplay,
            x: pointer.x,
            y: pointer.y,
            // scale: 4,
            ease: 'line',
            duraton: 1000,
            // 此处只能用箭头方法，如果用this调用callback会因为作用域问题导致微信小游戏第三方报错
            onComplete: () => {
                this.mArmatureDisplay.animation.play("idle");
            }
        });
        this.mArmatureDisplay.animation.play("walk");
    }

    pointerUpHandler() {
        // this.mArmatureDisplay.animation.play("idle");
    }

    pointerMoveHandler(pointer, gameObject, dragX, dragY) {
        gameObject.x = pointer.x;
        gameObject.y = pointer.y;
    }
}