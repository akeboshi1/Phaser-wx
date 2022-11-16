import Explosion from './explosion'

export default class Barrel extends Phaser.Physics.Matter.Image {
    constructor(scene, x, y) {
        super(scene.matter.world, x, y, 'atlas', 'barrelRed_top', {
            mass: 15,
            frictionAir: 0.05,
            shape: {
                type: 'circle',
            },
        })
    }

    damage() {
        this.scene.tweens.addCounter({
            targets: this,
            from: 0,
            to: 1,
            duration: Phaser.Math.RND.between(800, 1200),
            ease: (t) => {
                return Math.sin(Math.pow(t + 1, 3.5) * Math.PI + Math.PI / 2) * 0.5 + 0.5
            },
            onUpdate: (tween) => {
                if (tween.getValue() > 0.9)
                    this.setTintFill(0xffffff)
                else
                    this.clearTint()
                if (this.scene)
                    this.setScale(tween.getValue() * 0.2 + 0.9)
            },
            onComplete: () => {
                if (this.scene) {
                    let explosion = new Explosion(this.scene, this.x, this.y, 1.8)
                    this.scene.add.existing(explosion)

                    const spill = this.scene.add.sprite(this.x, this.y, 'atlas', 'oilSpill_large')
                    spill.setScale(Phaser.Math.RND.realInRange(0.7, 1) / this.scene.floorRenderTexture.scale)
                    spill.setAlpha(Phaser.Math.RND.realInRange(0.4, 0.6))
                    spill.setAngle(Phaser.Math.RND.angle())
                    this.scene.floorRenderTexture.draw(
                        spill,
                        this.x / this.scene.floorRenderTexture.scale,
                        this.y / this.scene.floorRenderTexture.scale,
                    )
                    spill.destroy()
                    this.destroy()
                }
            },
        })
    }
}