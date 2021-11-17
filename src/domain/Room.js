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
