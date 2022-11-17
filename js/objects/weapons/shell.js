import {Pillar, Wall} from '../maze'
import Explosion from '../explosion'
import Trail from "../trail"

class Spark extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'atlas', 'explosionSmoke3')
        this.setScale(0.25)
        this.setAngle(Phaser.Math.RND.angle())
        this.scene.tweens.add({
            targets: this,
            angle: Phaser.Math.RND.angle(),
            duration: 50,
            ease: 'Quad.easeIn',
            onComplete: () => {
                this.destroy()
            },
        })
    }
}

export class Shell extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y,
                angle,
                initialVelocity = new Phaser.Math.Vector2(0, 0),
                speed = 1,
                color = 'dark',
                type = 1,
                explosionScale = 1,
    ) {
        super(scene.matter.world, x, y, 'atlas', `bullet${color[0].toUpperCase() + color.substring(1) + type}_outline`, {
            angle: Phaser.Math.DegToRad(angle),
            frictionAir: 0,
            friction: 0,
            mass: 5,
            isSensor: true,
        })
        this.birthTime = scene.time.now
        this.lastPosition = {x: x, y: y}
        this.setFixedRotation()
        this.setVelocity(initialVelocity.x, initialVelocity.y)
        this.speed = speed
        this.thrustLeft(0.05 * this.speed)
        this.explosionScale = explosionScale
        this.setOnCollide((data) => {
                if (scene.time.now - this.birthTime < 50) {
                    if (this.active) this.explode()
                } else if (!(data.bodyA.gameObject instanceof Wall) && !(data.bodyA.gameObject instanceof Pillar)) {
                    if (this.active) this.explode()
                }
            },
        )

        this.setOnCollideEnd((data) => {
            if (data.bodyA.gameObject instanceof Pillar || data.bodyA.gameObject instanceof Wall) {
                this.isBouncing = false
            }
        })

        this.trail = new Trail(scene)
        scene.add.existing(this.trail)

        this.airSound = scene.sound.add('noise', {
            loop: true,
            volume: 3,
            detune: Phaser.Math.RND.realInRange(-100, 100),
        })

        scene.time.delayedCall(100, () => {
            if (this.active)
                this.airSound.play()
        }, [], this)
    }

    preUpdate(time, delta) {
        this.trail.addPoint(this.x, this.y, 1000 / this.speed)
        const dist = Phaser.Math.Clamp(this.distanceToNearestTank() / 300, 0, 0.9)
        this.airSound.rate = Math.pow(1 - dist * 0.3, 0.5) / this.explosionScale
        this.airSound.volume = 3 * (1 - dist)

        const tip = new Phaser.Math.Vector2(this.x, this.y)
        tip.add(
            new Phaser.Math.Vector2(this.body.velocity.x, this.body.velocity.y).normalize().scale(this.height / 2),
        )

        const angle = Phaser.Math.Angle.Between(this.lastPosition.x, this.lastPosition.y, tip.x, tip.y)

        const hit = this.scene.raycaster.rayToward(this.lastPosition.x, this.lastPosition.y, angle)
        if (hit) {
            const hitPoint = new Phaser.Math.Vector2(hit.x, hit.y)
            hitPoint.subtract(new Phaser.Math.Vector2(this.lastPosition.x, this.lastPosition.y))
            const dist = hitPoint.length()
            if (dist < this.height) {
                const newVelocity = new Phaser.Math.Vector2(this.body.velocity)
                newVelocity.setAngle(hit.reflectAngle)
                this.setVelocity(newVelocity.x, newVelocity.y)
                this.setRotation(hit.reflectAngle + Math.PI / 2)

                const spark = new Spark(this.scene, this.x, this.y)
                this.scene.add.existing(spark)

                this.scene.sound.play('ping', {
                    volume: 0.25,
                    detune: Phaser.Math.RND.realInRange(-200, 200),
                })
            }
        }
        this.lastPosition.x = this.x
        this.lastPosition.y = this.y
    }

    distanceToNearestTank() {
        let distance = 100000
        this.scene.tanks.forEach((tank) => {
            if (tank !== this) {
                let d = Phaser.Math.Distance.Between(this.x, this.y, tank.x, tank.y)
                if (d < distance) {
                    distance = d
                }
            }
        })
        return distance
    }

    explode() {
        let explosion = new Explosion(this.scene, this.x, this.y, this.explosionScale)
        this.scene.add.existing(explosion)
        this.airSound.stop()
        this.trail.destroy()
        this.destroy()
    }
}