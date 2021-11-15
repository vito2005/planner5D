export class Project {
  constructor({ id, name, floorsCount, roomsCount, otherItemsCount, rooms }) {
    this.id = id
    this.name = name
    this.statistics = { floorsCount, roomsCount, otherItemsCount }
    this.rooms = rooms
  }
}

export class Room {
  constructor(number, startPoint, walls) {
    this.number = number
    this.startPoint = startPoint
    this.walls = walls
  }

  getWallsPath() {
    return this.walls.reduce((points, wall) => {
      wall.getPoints().forEach(({ x, y }) => {
        points.push({ x: x + this.startPoint.x, y: y + this.startPoint.y })
      })
      return points
    }, [])
  }
}

export class Wall {
  constructor(start, end) {
    this._start = start
    this._end = end
  }

  getPoints() {
    return [this._start, this._end]
  }
}

export class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}
