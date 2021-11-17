export class Wall {
  constructor(start, end) {
    this._start = start
    this._end = end
  }

  getPoints() {
    return [this._start, this._end]
  }
}
