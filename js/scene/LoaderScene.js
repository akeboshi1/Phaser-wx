import { HEIGHT, WIDTH } from "../main";

export class LoaderScene extends Phaser.Scene {
    constructor() {
        super();
        this.key = "LOADERSCENE"
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


        // this.load.atlas();
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

        // let scene = this.game.scene.getScene("UIScene");
        // if (!scene) {
        //     this.game.scene.add("UIScene", UIScene, false);
        // }



        // this.add.image(500,500,"star");

        // this.add.image(800,500,"dragonbone");


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
        for (let i = 0; i < 100; i++) {
            const dragonBone = this.add.armature(
                "Armature",
                "bones_human01",
            );
            dragonBone.setDepth(1);
            const num = Math.random();
            const posRandom = num > 0.5 ? 1 : -1;
            dragonBone.x = this.cameras.main.centerX + posRandom * Math.random() * WIDTH/2;
            dragonBone.y = this.cameras.main.centerY + posRandom * Math.random() * HEIGHT/2;
            const action = num > 0.5 ? "walk" : "attack";
            dragonBone.animation.play(action)
            // this.dragonBones.push(dragonBone);
        }



        this.scene.launch("UISCENE", { display: this.mArmatureDisplay });
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

    // 废弃
    // tweenCallBack() {
    //     this.mArmatureDisplay.animation.play("idle");
    // }


    pointerUpHandler() {
        // this.mArmatureDisplay.animation.play("idle");
    }

    pointerMoveHandler(pointer, gameObject, dragX, dragY) {
        gameObject.x = pointer.x;
        gameObject.y = pointer.y;
    }
}