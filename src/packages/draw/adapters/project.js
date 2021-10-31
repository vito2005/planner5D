import * as graphicTool from '@src/packages/draw/graphicTool'

export function drawRooms(roomsData) {
  graphicTool.init()

  roomsData.forEach((room) => {
    graphicTool.beginPath()

    room.items.forEach((wall) => {
      wall.items.forEach(({ x, y }, i) => {
        const xCoord = x + room.x
        const yCoord = y + room.y
        if (i === 0) {
          graphicTool.moveToPoint(xCoord, yCoord)
        } else {
          graphicTool.drawPath(xCoord, yCoord)
        }
      })
    })

    graphicTool.endPath()
  })
}

export function drawProjectStats({ title, floors, rooms, otherItems }) {
  $('.project__title').text(title)
  $('.floors-amount').text(`Amount of floors: ${floors}`)
  $('.rooms-amount').text(`Amount of rooms: ${rooms}`)
  $('.other-items-amount').text(`Amount of other items: ${otherItems}`)
}
