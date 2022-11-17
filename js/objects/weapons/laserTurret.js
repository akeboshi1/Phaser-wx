import Laser from "./laser"
import Explosion from "../explosion"
import { DPR } from "../../main"

export default class LaserTurret extends Phaser.GameObjects.Container {
    constructor(scene, x, y, tank, color = 'blue') {
        super(scene, x, y)
        this.tank = tank
        this.color = color
        this.barrel = scene.add.sprite(0, 0, 'atlas', `tank${color[0].toUpperCase() + color.substring(1)}_barrel3_outline`)
        this.barrel.setOrigin(0.5, 0)
        this.add(this.barrel)

        this.aimLaser = new Laser(scene, 1000, 5, true)
        scene.add.existing(this.aimLaser)

        this.firing = false
    }

    fire() {
        this.firing = true
        this.aimLaser.clear()
        this.scene.sound.play('laser1', {detune: Phaser.Math.RND.between(-200, 200)})
        const fireOffset = new Phaser.Math.Vector2().setToPolar(this.tank.rotation + this.rotation, this.barrel.height).rotate(Phaser.Math.PI2 / 4)
        const fireLaser = new Laser(this.scene,
            2000,
            5,
            false,
        )
        this.scene.add.existing(fireLaser)
        fireLaser.fire(
            this.tank.x + fireOffset.x,
            this.tank.y + fireOffset.y,
            this.tank.angle + this.angle + 90,
        )
        const hits = [...fireLaser.hits]
        const laserPath = new Phaser.Curves.Path(fireLaser.rayOrigin.x, fireLaser.rayOrigin.y)
        hits.forEach(hit => laserPath.lineTo(hit.x, hit.y))
        this.scene.tweens.addCounter({
            from: 0,
            to: 1,
            ease: 'linear',
            duration: fireLaser.rayLength / 5,
            onUpdate: (tween) => {
                fireLaser.draw(tween.getValue())
                for (let i = 0; i < hits.length; i++) {
                    const hit = hits[i]
                    if (tween.getValue() > (1 - hit.remaningLength / fireLaser.rayLength)) {
                        let explosion = new Explosion(this.scene, hit.x, hit.y, 0.3)
                        this.scene.add.existing(explosion)
                        hits.splice(i, 1)
                    }
                }
            },
            onComplete: () => {
                this.scene.time.delayedCall(50, () => fireLaser.destroy())
                const emitter = this.scene.laserParticles.createEmitter(
                    {
                        emitZone: {type: 'random', source: laserPath},
                        speed: {min: 0, max: 50},
                        angle: {min: 0, max: 360},
                        lifespan: 400,
                        scale: {start: 0.05, end: 0},
                        alpha: {start: 1, end: 0},
                        tint: 0xff0000,
                        delay: 0,
                    })
                emitter.explode(fireLaser.rayLength / 20)
                this.firing = false
            },
        })
    }

    preUpdate(time, delta) {
        const fireOffset = new Phaser.Math.Vector2().setToPolar(this.tank.rotation + this.rotation, this.barrel.height).rotate(Phaser.Math.PI2 / 4)
        this.aimLaser.fire(
            this.tank.x + fireOffset.x,
            this.tank.y + fireOffset.y,
            this.tank.angle + this.angle + 90,
        )
        if (!this.firing) {
            this.aimLaser.draw()
        }
    }
}