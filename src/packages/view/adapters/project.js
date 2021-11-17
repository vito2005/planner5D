import * as graphicTool from '@src/packages/view/graphicTool'

export function drawRooms(rooms) {
  const ctx = graphicTool.getContext()

  rooms.forEach((room) => {
    const wallsPath = room.getWallsPath()
    graphicTool.drawPath(ctx, wallsPath)
  })
}

export function showProjectStats({
  title,
  floorsCount,
  roomsCount,
  otherItemsCount,
}) {
  $('.project__title').text(title)
  $('.project__subtitle').text('Statistics')
  $('.floors-amount').text(`Amount of floors: ${floorsCount}`)
  $('.rooms-amount').text(`Amount of rooms: ${roomsCount}`)
  $('.other-items-amount').text(`Amount of other items: ${otherItemsCount}`)
}
