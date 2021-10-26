import './styles/styles.css'
import './styles/project.scss'

const projectKey = new URLSearchParams(location.search).get('key')

import(`@src/assets/${projectKey}.json`).then((data) => {
  const projectTitle = data.items[0].name
  const projectData = data.items[0].data.items
  const { roomsData, floors, rooms, otherItems } =
    getParsedProjectData(projectData)

  $('.project__title').text(projectTitle)
  $('.floors-amount').text(`Amount of floors: ${floors}`)
  $('.rooms-amount').text(`Amount of rooms: ${rooms}`)
  $('.other-items-amount').text(`Amount of other items: ${otherItems}`)

  drawRooms(roomsData)
})

function getParsedProjectData(projectData) {
  return projectData.reduce(
    (acc, item, currentIndex) => {
      if (item.className === 'Floor') {
        acc.floors++

        item.items.forEach((floorItem) => {
          if (floorItem.className === 'Room') {
            acc.rooms++

            // first floor
            if (currentIndex === 0) {
              acc.roomsData.push(floorItem)
            }
          } else {
            acc.otherItems++
          }
        })
      }

      return acc
    },
    {
      roomsData: [],
      floors: 0,
      rooms: 0,
      otherItems: 0,
    }
  )
}

function drawRooms(roomsData) {
  const canvas = $('canvas')[0]
  canvas.width = 2000
  canvas.height = 2000

  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#f00'
  ctx.translate(-3000, -3000)

  roomsData.forEach((room) => {
    ctx.beginPath()
    room.items.forEach((wall) => {
      wall.items.forEach(({ x, y }, i) => {
        const xCoord = x + room.x
        const yCoord = y + room.y
        if (i === 0) {
          ctx.moveTo(xCoord, yCoord)
        } else {
          ctx.lineTo(xCoord, yCoord)
        }
      })
    })
    ctx.closePath()
    ctx.stroke()
  })
}
