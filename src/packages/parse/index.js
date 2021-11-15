import { Room, Wall, Point } from '../../domain/project.js'

export function getParsedProjectsList(projectsListData) {
  return projectsListData.data.map((p) => ({
    url: `./project.html?key=${p.hash}`,
    itemTitle: `${p.hash}, ${p.title}`,
  }))
}

export function getParsedProjectData(data) {
  const name = data.items[0].name
  const hash = data.items[0].hash
  const projectData = data.items[0].data.items

  return projectData.reduce(
    (acc, item, currentIndex) => {
      if (item.className === 'Floor') {
        acc.floorsCount++

        item.items.forEach((floorItem) => {
          if (floorItem.className === 'Room') {
            acc.roomsCount++

            // first floor
            if (currentIndex === 0) {
              const room = prepareRoom({
                roomIndex: acc.rooms.length,
                roomData: floorItem,
              })

              acc.rooms.push(room)
            }
          } else {
            acc.otherItemsCount++
          }
        })
      }

      return acc
    },
    { name, hash, rooms: [], floorsCount: 0, roomsCount: 0, otherItemsCount: 0 }
  )
}

function prepareRoom({ roomIndex, roomData }) {
  const { x, y, items } = roomData
  const startPoint = new Point(x, y)

  const walls = items.map((item) => item.className === 'Wall' && getWall(item))

  return new Room(roomIndex, startPoint, walls)
}

function getWall(wall) {
  const [start, end] = wall.items
  return new Wall(new Point(start.x, start.y), new Point(end.x, end.y))
}
