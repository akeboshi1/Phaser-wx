import { UISCENE } from "../main";

export class UIScene extends Phaser.Scene {
    constructor() {
        super();
        this.key = UISCENE;
        this.init();
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


        this.mShareBtn = this.add.graphics({ x: 300, y: 50 });
        this.mShareBtn.fillStyle(0xffffff, 1);
        this.mShareBtn.fillRect(0, 0, 100, 100).setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 100), Phaser.Geom.Rectangle.Contains);
        this.mShareBtn.on("pointerdown", this.pointerShareHandler, this);
    }

    update() {

    }




    init() {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        });

        wx.onShareAppMessage(() => {
            return {
                // 标题，不传则默认使用小游戏的名称
                title: "邀您一起来嗨！",

                // 转发链接所显示的图片，比例5:4，资源可以是本地或远程。不传则默认使用游戏截图。           
                // imageUrl: "shareImage.png"
            }
        });
        console.log("share game --->");
    }

    pointerShareHandler() {
        wx.shareAppMessage({
            title: "邀您一起来嗨！",
            success:(res)=>{ console.log("share game success--->");}
        });
    }


    pointerDownHandler() {
        if (this.dragonbone) this.dragonbone.scaleX *= -1;
    }

    pointerAttackHandler() {
        this.events.emit("attack")
    }
}