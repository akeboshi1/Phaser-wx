export default class Laser extends Phaser.GameObjects.Graphics {
    constructor(scene, rayLength = 1000, rayWidth = 5, fade = true) {
        super(scene)
        this.setDepth(1)
        this.rayLength = rayLength
        this.rayWidth = rayWidth
        this.fade = fade
        if (fade) this.setBlendMode(Phaser.BlendModes.SCREEN)
        this.hits = []
        this.startsIntersecting = false
    }

    fire(x, y, angle) {
        this.rayOrigin = {
            x: x,
            y: y,
            angle: angle,
        }
        this.hits = []
        this.startsIntersecting = this.bounceLaser(this.rayOrigin.x,
            this.rayOrigin.y,
            Phaser.Math.DegToRad(this.rayOrigin.angle),
            this.rayLength,
        )
    }

    draw(t = 1) {
        this.clear()
        if (this.startsIntersecting) return
        this.beginPath()
        if (!this.fade) this.lineStyle(this.rayWidth, 0xff0000, 1)
        let points = [{
            x: this.rayOrigin.x,
            y: this.rayOrigin.y,
            remaningLength: this.rayLength,
        }, ...this.hits]
        let length = this.rayLength * t
        for (let i = 0; i < points.length - 1; i++) {
            let point = points[i]
            let nextPoint = points[i + 1]
            let segment = new Phaser.Math.Vector2(nextPoint.x, nextPoint.y)
            segment.subtract(new Phaser.Math.Vector2(point.x, point.y))
            segment.setLength(Math.min(length, segment.length()))
            length -= segment.length()
            if (this.fade) {
                const startColor = new Phaser.Display.Color(255 * point.remaningLength / this.rayLength, 0, 0)
                const endColor = new Phaser.Display.Color(255 * nextPoint.remaningLength / this.rayLength, 0, 0)
                this.lineGradientStyle(this.rayWidth, startColor.color, endColor.color, startColor.color, endColor.color)
            }
            this.lineBetween(point.x, point.y, point.x + segment.x, point.y + segment.y)
            if (length <= 0) break
        }
        this.strokePath()
        this.closePath()
    }

    bounceLaser(x, y, angle, length, prevHit = false, bounces = 0) {
        const hit = this.scene.raycaster.rayToward(x, y, angle)
        if (hit) {
            if (hit.polygon.contains(x, y)) {
                return true
            }
            const dist = Phaser.Math.Distance.Between(x, y, hit.x, hit.y)
            if (length > dist) {
                const newLength = length - dist
                hit.remaningLength = newLength
                this.hits.push({...hit})
                return this.bounceLaser(
                    hit.x,
                    hit.y,
                    hit.reflectAngle,
                    newLength,
                    hit,
                    bounces + 1)
            } else {
                hit.remaningLength = 0
                this.hits.push({...hit})
            }
        }
        return false
    }
}