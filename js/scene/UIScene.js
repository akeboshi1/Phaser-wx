import { UISCENE } from "../main";
import Music from "../utils/music";

export class UIScene extends Phaser.Scene {
    constructor() {
        super();
        this.key = UISCENE;
        this.initWX();
        // console.log("uiscene init");
    }


    initWX() {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        });

        wx.onShareAppMessage(() => {
            return {
                // 标题，不传则默认使用小游戏的名称
                title: "邀您一起来嗨！",

                // 转发链接所显示的图片，比例5:4，资源可以是本地或远程。不传则默认使用游戏截图。           
                imageUrl: "images/face.jpg"
            }
        });
        console.log("share game --->");
    }
    init(data) {
        this.dragonbone = data.display;
    }

    preload() {
        this.load.image("btn", "images/bullet.png", { wechatDebug: true });
        //this.load.audio('bgSound', 'images/mp3/bgm.mp3', undefined, { wechatDebug: true });
        this.load.audio('remoteSound', 'https://akeboshi1.github.io/Jay/publish/assets/Jay%20demo%201.mp3');
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

        if(wx){
            this.sfx = wx.createInnerAudioContext();
            this.sfx.src = "https://akeboshi1.github.io/Jay/publish/assets/Jay%20demo%201.mp3";
            this.sfx.loop =true;
            this.sfx.play();
        }else{
            this.sfx = this.sound.add('bgSound');
            this.sfx.play({ loop: true });
        }
       
        this.mBackground = this.add.graphics({ x: 100, y: 50 });
        this.mBackground.fillStyle(0x0000, 1);
        this.mBackground.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        this.mBackground.on("pointerdown", this.pointerDownHandler, this);

        this.mAttackBtn = this.add.graphics({ x: 200, y: 50 });
        this.mAttackBtn.fillStyle(0xffcc00, 1);
        this.mAttackBtn.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        this.mAttackBtn.on("pointerdown", this.pointerAttackHandler, this);


        this.mShareBtn = this.add.graphics({ x: 300, y: 50 });
        this.mShareBtn.fillStyle(0xffffff, 1);
        this.mShareBtn.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        this.mShareBtn.on("pointerdown", this.pointerShareHandler, this);

        this.mMusicBtn = this.add.graphics({ x: 400, y: 50 });
        this.mMusicBtn.fillStyle(0x00ff00, 1);
        this.mMusicBtn.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        this.mMusicBtn.on("pointerdown", this.pointerMusicHandler, this);
        
    }

    update() {

    }


    pointerMusicHandler() {
        if (!this.pause) {
            this.sfx.pause();
        } else {
            this.sfx.play();
        }
        this.pause = !this.pause;
    }


    pointerShareHandler() {
        wx.shareAppMessage({
            title: "邀您一起来嗨！",
            imageUrl: "images/bg.jpg",
            success: (res) => { console.log("share game success--->"); }
        });
    }


    pointerDownHandler() {
        if (this.dragonbone) this.dragonbone.scaleX *= -1;
    }

    pointerAttackHandler() {
        this.events.emit("attack")
    }
}