import Shell from "./shell"

export class FatMuzzleFlash extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'atlas', 'shotOrange')
        this.setOrigin(0.5, 0)
        this.setScale(1.4)
        scene.time.addEvent({
            delay: 100,
            callback: () => this.destroy(),
        })
    }
}

export default class FatTurret extends Phaser.GameObjects.Container {
    constructor(scene, x, y, tank, color = 'blue', shellColor) {
        super(scene, x, y)
        this.tank = tank
        this.color = color
        this.shellColor = shellColor
        this.barrel = scene.add.sprite(0, 0, 'atlas', `tank${color[0].toUpperCase() + color.substring(1)}_barrel1_outline`)
        this.barrel.setOrigin(0.5, 0)
        this.add(this.barrel)
    }

    fire() {
        let flash = new FatMuzzleFlash(this.scene, 0, this.barrel.height)
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
            1,
            this.shellColor ? this.shellColor : this.color,
            2,
            2.3,
        )
        this.scene.add.existing(shell)
        const knockback = {
            linear: 4,
            angular: 3,
        }
        this.tank.thrustLeft(knockback.linear)
        this.tank.body.torque = Phaser.Math.RND.realInRange(-knockback.angular, knockback.angular)
        this.scene.sound.play('shot2', {rate: 0.5})
    }
}