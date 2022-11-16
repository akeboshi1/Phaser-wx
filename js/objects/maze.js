export class Wall extends Phaser.Physics.Matter.Image {
    // create sprite between two points
    constructor(scene, x1, y1, x2, y2) {
        super(scene.matter.world, x1 + (x2 - x1) * 0.5, y1 + (y2 - y1) * 0.5,
            'atlas',
            Phaser.Math.RND.pick(['wall1', 'wall2', 'wall3', 'wall4', 'wall5']), {
                isStatic: true,
            },
        )
        let width = 40
        this.setScale(Phaser.Math.Distance.Between(x1, y1, x2, y2) / this.width)
        this.setScale(this.scaleX, width / this.height)
        this.setRotation(Phaser.Math.Angle.Between(x1, y1, x2, y2) + Phaser.Math.RND.pick([0, Math.PI]))
    }
}

export class Pillar extends Phaser.Physics.Matter.Image {
    constructor(scene, x, y) {
        super(scene.matter.world, x, y, 'atlas', 'crateMetal', {
            isStatic: true,
        })
        let size = 40
        this.setScale(size / this.width)
    }

    preUpdate(time, delta) {
    }
}

export class Cell {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.walls = [true, true, true, true] // top, right, bottom, left
        this.visited = false
    }
}

export default class Maze extends Phaser.GameObjects.Container {
    constructor(scene, width, height, cellWidth, cellHeight) {
        super(scene)
        this.width = width
        this.height = height
        this.cellWidth = cellWidth
        this.cellHeight = cellHeight
        this.walls = []
        this.pillars = []
        this.cells = Array.from({length: width},
            (_, x) => Array.from({length: height},
                (_, y) => new Cell(x, y),
            ),
        )
        this.generate(this.cells[0][0])
        this.removeWalls(Math.sqrt(width * height))
        this.generate(this.cells[0][0])
        this.removeWalls(this.width * this.height / 5)
        this.createWallObjects()
        this.createPillarObjects()
    }

    getNeighbours(cell) {
        const neighbours = []
        const {x, y} = cell
        if (y > 0) {
            neighbours.push(this.cells[x][y - 1])
        }
        if (x < this.width - 1) {
            neighbours.push(this.cells[x + 1][y])
        }
        if (y < this.height - 1) {
            neighbours.push(this.cells[x][y + 1])
        }
        if (x > 0) {
            neighbours.push(this.cells[x - 1][y])
        }
        return neighbours
    }

    generate(current) {
        current.visited = true
        let neighbours = this.getNeighbours(current)
        let unvisitedNeighbours = neighbours.filter(n => !n.visited)
        while (unvisitedNeighbours.length > 0) {
            const randomNeighbour = Phaser.Math.RND.pick(unvisitedNeighbours)
            //remove walls between current and randomNeighbour
            if (randomNeighbour.x === current.x) {
                if (randomNeighbour.y < current.y) {
                    current.walls[0] = false
                    randomNeighbour.walls[2] = false
                } else {
                    current.walls[2] = false
                    randomNeighbour.walls[0] = false
                }
            } else {
                if (randomNeighbour.x < current.x) {
                    current.walls[3] = false
                    randomNeighbour.walls[1] = false
                } else {
                    current.walls[1] = false
                    randomNeighbour.walls[3] = false
                }
            }
            this.generate(randomNeighbour)
            neighbours = this.getNeighbours(current)
            unvisitedNeighbours = neighbours.filter(n => !n.visited)
        }
    }

    removeWall(cell, wallIndex) {
        if ((wallIndex === 0 && cell.y === 0) ||
            (wallIndex === 1 && cell.x === this.width - 1) ||
            (wallIndex === 2 && cell.y === this.height - 1) ||
            (wallIndex === 3 && cell.x === 0)) {
            return false
        }
        cell.walls[wallIndex] = false
        if (wallIndex === 0) {
            this.cells[cell.x][cell.y - 1].walls[2] = false
        } else if (wallIndex === 1) {
            this.cells[cell.x + 1][cell.y].walls[3] = false
        } else if (wallIndex === 2) {
            this.cells[cell.x][cell.y + 1].walls[0] = false
        } else if (wallIndex === 3) {
            this.cells[cell.x - 1][cell.y].walls[1] = false
        }
        return true
    }

    removeWalls(count) {
        for (let i = 0; i < count; i++) {
            const x = Phaser.Math.RND.between(0, this.width - 1)
            const y = Phaser.Math.RND.between(0, this.height - 1)
            const cell = this.cells[x][y]
            const wallIndices = [...cell.walls.keys()].filter(i => cell.walls[i])
            const wallIndex = Phaser.Math.RND.pick(wallIndices)
            this.removeWall(cell, wallIndex)
        }
    }

    createWallObjects() {
        this.cells.forEach(col => col.forEach(cell => {
                // always create right and bottom walls
                // only create top and left walls if they are on the edge
                if (cell.walls[0] && cell.y === 0) {
                    const wall = new Wall(this.scene, cell.x * this.cellWidth, cell.y * this.cellHeight, cell.x * this.cellWidth + this.cellWidth, cell.y * this.cellHeight)
                    this.add(wall)
                    this.walls.push(wall)
                }
                if (cell.walls[1]) {
                    const wall = new Wall(this.scene, cell.x * this.cellWidth + this.cellWidth, cell.y * this.cellHeight, cell.x * this.cellWidth + this.cellWidth, cell.y * this.cellHeight + this.cellHeight)
                    this.add(wall)
                    this.walls.push(wall)
                }
                if (cell.walls[2]) {
                    const wall = new Wall(this.scene, cell.x * this.cellWidth, cell.y * this.cellHeight + this.cellHeight, cell.x * this.cellWidth + this.cellWidth, cell.y * this.cellHeight + this.cellHeight)
                    this.add(wall)
                    this.walls.push(wall)
                }
                if (cell.walls[3] && cell.x === 0) {
                    const wall = new Wall(this.scene, cell.x * this.cellWidth, cell.y * this.cellHeight, cell.x * this.cellWidth, cell.y * this.cellHeight + this.cellHeight)
                    this.add(wall)
                    this.walls.push(wall)
                }
            },
        ))
    }

    // for every cell, create a pillar in every corner with a wall on at least one side
    // dont create a pillar if there already is one
    createPillarObjects() {
        this.cells.forEach(col => col.forEach(cell => {
            if ((cell.walls[0] || cell.walls[1]) && !this.pillars.some(p => p.x === cell.x * this.cellWidth + this.cellWidth && p.y === cell.y * this.cellHeight)) {
                const pillar = new Pillar(this.scene, cell.x * this.cellWidth + this.cellWidth, cell.y * this.cellHeight)
                this.add(pillar)
                this.pillars.push(pillar)
            }
            if ((cell.walls[1] || cell.walls[2]) && !this.pillars.some(p => p.x === cell.x * this.cellWidth + this.cellWidth && p.y === cell.y * this.cellHeight + this.cellHeight)) {
                const pillar = new Pillar(this.scene, cell.x * this.cellWidth + this.cellWidth, cell.y * this.cellHeight + this.cellHeight)
                this.add(pillar)
                this.pillars.push(pillar)
            }
            if ((cell.walls[2] || cell.walls[3]) && !this.pillars.some(p => p.x === cell.x * this.cellWidth && p.y === cell.y * this.cellHeight + this.cellHeight)) {
                const pillar = new Pillar(this.scene, cell.x * this.cellWidth, cell.y * this.cellHeight + this.cellHeight)
                this.add(pillar)
                this.pillars.push(pillar)
            }
            if ((cell.walls[3] || cell.walls[0]) && !this.pillars.some(p => p.x === cell.x * this.cellWidth && p.y === cell.y * this.cellHeight)) {
                const pillar = new Pillar(this.scene, cell.x * this.cellWidth, cell.y * this.cellHeight)
                this.add(pillar)
                this.pillars.push(pillar)
            }
        }))
    }
}