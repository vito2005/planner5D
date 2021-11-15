import * as graphicTool from '@src/packages/view/graphicTool'

export function drawRooms(rooms) {
  rooms.forEach((room) => {
    const wallsPath = room.getWallsPath()

    graphicTool.drawPath(wallsPath)
  })
}

export function showProjectStats({
  title,
  floorsCount,
  roomsCount,
  otherItemsCount,
}) {
  $('.project__title').text(title)
  $('.floors-amount').text(`Amount of floors: ${floorsCount}`)
  $('.rooms-amount').text(`Amount of rooms: ${roomsCount}`)
  $('.other-items-amount').text(`Amount of other items: ${otherItemsCount}`)
}
