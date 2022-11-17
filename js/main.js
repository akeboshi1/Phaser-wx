import "./libs/phaser.min";
import { TankGame } from "./TankGame";

export const TASKGAME = "TASKGAME";
export const DPR = Number(window.devicePixelRatio.toFixed(1));
export const WIDTH = Math.round(window.innerWidth * DPR)
export const HEIGHT = Math.round(window.innerHeight * DPR)
export class Main {
    constructor() {
        const self = this;
        wx.loadSubpackage({
          name: 'raycaster', // 下载其他分包
          success(res) {
            import("raycaster/game.js").then((raycaster) => {
    
              self.init(raycaster);
            });
            console.log('load moduleA success', res)
          },
          fail(err) {
            console.error('load moduleA fail', err)
          }
          // export const assetsDPR = roundHalf(Math.min(Math.max(HEIGHT / 360, 1), 4))
        })
    }

    init(raycaster) {
        const config = {
            type: Phaser.WEBGL,
            width: WIDTH,
            height: HEIGHT,
            physics: {
                default: 'matter',
                matter: {
                    runner: {
                        isFixed: true,
                        delta: 8,
                    },
                    gravity: { y: 0 },
                    // debug: {
                    //     showBody: true,
                    //     showStaticBody: true,
                    //     showVelocity: true,
                    //     showCollisions: true,
                    //     showAxes: true,
                    //     showPositions: true,
                    //     showAngleIndicator: true,
                    // },
                },
            },
            dom: {
                createContainer: true
            },
            parent: 'tank-game',
            scale: {
                mode: Phaser.Scale.FIT,
                width: WIDTH,
                height: HEIGHT,
                zoom: DPR,
            },
            backgroundColor: '#9393bf',
        }
        if (window.canvas) {
            config.canvas = window.canvas;
        }
        this.game = new Phaser.Game(config);
        this.game.scene.add(TASKGAME, TankGame, true, { ray:raycaster });
    }

}