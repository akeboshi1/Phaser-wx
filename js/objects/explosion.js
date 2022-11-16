import Barrel from './barrel'

export default class Explosion extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, scale = 1) {
        super(scene.matter.world, x, y, 'atlas', 'explosion1', {
            isSensor: true,
            isStatic: true,
            shape: {
                type: 'circle',
            },
        })
        this.setScale(scale)
        this.setOnCollide((data) => {
            let explosionForce = 10 * scale
            if (data.bodyA.gameObject)
                data.bodyA.gameObject.setVelocity(
                    data.bodyA.velocity.x + explosionForce * (data.bodyA.position.x - this.x) / this.width,
                    data.bodyA.velocity.y + explosionForce * (data.bodyA.position.y - this.y) / this.height,
                )
            if (data.bodyA.gameObject instanceof Barrel) {
                data.bodyA.gameObject.damage()
            }
        })

        this.emitter = this.scene.explosionParticles.createEmitter({
            x: x,
            y: y,
            speed: {min: -200, max: 200},
            angle: {min: 0, max: 360},
            alpha: {start: 1, end: 0},
            scale: {start: 1 + scale * 0.5, end: 0.3},
            lifespan: 300 * scale,
        })
        this.emitter.explode(20 * scale)

        scene.sound.play('explosion1', {
            volume: 0.3 + scale * 0.3,
            rate: Phaser.Math.RND.realInRange(1.9, 2.3) - scale * 0.5,
            detune: Phaser.Math.RND.realInRange(-100, 100) - scale * 500,
        })

        scene.cameras.main.shake(100 * scale, 0.008 * (1 + scale * 0.3))

        const crater = this.scene.add.sprite(this.x, this.y, 'atlas', 'crater')
        crater.setAlpha(0.075 * scale)
        crater.setScale(scale / this.scene.floorRenderTexture.scale)
        this.scene.floorRenderTexture.draw(
            crater,
            this.x / this.scene.floorRenderTexture.scale,
            this.y / this.scene.floorRenderTexture.scale,
        )
        crater.destroy()

        this.anims.play('explosion')
        this.once('animationcomplete', () => {
            this.destroy()
        })
    }
}