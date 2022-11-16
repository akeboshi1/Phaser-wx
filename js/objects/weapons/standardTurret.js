import Shell from "./shell"

export class MuzzleFlash extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'atlas', 'shotLarge')
        this.setOrigin(0.5, 0)
        scene.time.addEvent({
            delay: 75,
            callback: () => this.destroy(),
        })
    }
}

export default class StandardTurret extends Phaser.GameObjects.Container {
    constructor(scene, x, y, tank, color = 'blue', shellColor) {
        super(scene, x, y)
        this.tank = tank
        this.color = color
        this.shellColor = shellColor
        this.barrel = scene.add.sprite(0, 0, 'atlas', `tank${color[0].toUpperCase() + color.substring(1)}_barrel2_outline`)
        this.barrel.setOrigin(0.5, 0)
        this.add(this.barrel)
    }

    fire() {
        let flash = new MuzzleFlash(this.scene, 0, this.barrel.height)
        this.add(flash)
        this.scene.tweens.add({
            targets: this,
            y: {from: -20, to: 0},
            ease: 'linear',
            duration: 700,
        })

        const fireOffset = new Phaser.Math.Vector2().setToPolar(this.tank.rotation + this.rotation, this.barrel.height).rotate(Phaser.Math.PI2 / 4)
        let shell = new Shell(
            this.scene,
            this.tank.x + this.x + fireOffset.x,
            this.tank.y + this.y + fireOffset.y,
            this.tank.angle + this.angle + 180,
            undefined,
            2,
            this.shellColor ? this.shellColor : this.color,
            1,
            1,
        )
        this.scene.add.existing(shell)
        const knockback = {
            linear: 2,
            angular: 1.5,
        }
        this.tank.thrustLeft(knockback.linear)
        this.tank.body.torque = Phaser.Math.RND.realInRange(-knockback.angular, knockback.angular)
        this.scene.sound.play('shot2')
    }
}