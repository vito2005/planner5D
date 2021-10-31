export function getParsedProjectData(data) {
  const title = data.items[0].name
  const projectData = data.items[0].data.items

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
    { title, roomsData: [], floors: 0, rooms: 0, otherItems: 0 }
  )
}
