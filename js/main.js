import "../lib/phaser.js";
import { TankGame } from "./TankGame";

export const TASKGAME = "TASKGAME";
export const DPR = Number(window.devicePixelRatio.toFixed(1));
export const WIDTH = Math.round(window.innerWidth * DPR)
export const HEIGHT = Math.round(window.innerHeight * DPR)
export class Main {
    constructor() {
        this.init();
    }

    init() {
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
            scene: [TankGame],
            scale: {
                mode: Phaser.Scale.FIT,
                width: WIDTH,
                height: HEIGHT,
                zoom: 1 / DPR,
            },
            backgroundColor: '#9393bf',
        }
        if (window.canvas) {
            config.canvas = window.canvas;
        }
        this.game = new Phaser.Game(config)
    }

}