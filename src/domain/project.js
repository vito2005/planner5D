export class Project {
  constructor({ id, name, floorsCount, roomsCount, otherItemsCount, rooms }) {
    this.id = id
    this.name = name
    this.statistics = { floorsCount, roomsCount, otherItemsCount }
    this.rooms = rooms
  }
}
