import LaserTurret from "./weapons/laserTurret"

export class TankBody extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, color = 'blue') {
        super(scene, x, y, 'atlas', `tankBody_${color}_outline`)
        this.setOrigin(0.5, 0.5)
    }
}

export default class Tank extends Phaser.GameObjects.Container {
    constructor(scene, x, y, color = 'blue', inputKeys) {
        super(scene, x, y)

        this.trackFrame = 0

        this.color = color

        this.tankBody = new TankBody(scene, 0, 0, color)
        this.scene.add.existing(this.tankBody)
        this.add(this.tankBody)

        this.tankTurret = new LaserTurret(scene, 0, 0, this, color)
        this.scene.add.existing(this.tankTurret)
        this.add(this.tankTurret)

        this.tracks = new Phaser.GameObjects.Sprite(scene, 0, 0, 'atlas', 'tracks')
        this.tracks.setVisible(false)
        this.tracks.alpha = 0.02
        this.tracks.setScale(1 / scene.floorRenderTexture.scale)
        this.add(this.tracks)

        this.setSize(this.tankBody.displayWidth - 10, this.tankBody.displayHeight - 12)

        this.inputKeys = inputKeys
        inputKeys.fire.on('down', (event) => {
            this.tankTurret.fire()
        })

        this.motorPower = 0

        this.engineSound = scene.sound.add('engine1', {
            loop: true,
            volume: 0.1,
        })
        this.engineSound.play()

        scene.matter.add.gameObject(this)
        this.body.frictionAir = 0.1
        this.body.mass = 100
        this.body.friction = 1
    }

    drawTracks() {
        this.tracks.angle = this.angle
        this.scene.floorRenderTexture.draw(
            this.tracks,
            this.x / this.scene.floorRenderTexture.scale,
            this.y / this.scene.floorRenderTexture.scale,
        )
    }

    preUpdate(time, delta) {
        let throttle = 0
        let throttleRate = 0.05
        if (this.inputKeys.up.isDown) {
            throttle += throttleRate
        }
        if (this.inputKeys.down.isDown) {
            throttle -= throttleRate
        }
        if (throttle !== 0)
            this.thrustRight(throttle * delta * 0.1)
        let turn = 0
        let turnRate = 0.1
        if (this.inputKeys.left.isDown) {
            turn -= turnRate
        }
        if (this.inputKeys.right.isDown) {
            turn += turnRate
        }
        if (turn !== 0)
            this.body.torque = turn * delta * 0.1

        this.motorPower = Phaser.Math.Linear(this.motorPower,
            (throttle !== 0 ? 0.7 : 0) + (turn !== 0 ? 0.3 : 0),
            delta * 0.003,
        )
        this.engineSound.volume = Phaser.Math.Linear(0.2, 1, this.motorPower)
        this.engineSound.detune = Phaser.Math.Linear(-500, 500, this.motorPower)
        this.engineSound.rate = Phaser.Math.Linear(0.7, 1, this.motorPower)

        if (this.trackFrame % 5 === 0 && (this.body.speed > 0.01 || this.body.angularSpeed > 0.001)) {
            this.drawTracks()
        }
        this.trackFrame++
    }
}