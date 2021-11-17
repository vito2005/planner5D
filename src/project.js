import './styles/project.scss'
import { Planner5D } from './app'
import { Project } from './domain/Project'

async function makeProject() {
  const projectKey = new URLSearchParams(location.search).get('key')
  const data = await Planner5D.api.project.getProjectData(projectKey)

  const { name, hash, floorsCount, roomsCount, otherItemsCount, rooms } =
    Planner5D.parse.getParsedProjectData(data)

  const project = new Project({
    id: hash,
    name,
    floorsCount,
    roomsCount,
    otherItemsCount,
    rooms,
  })

  Planner5D.view.projectView.showProjectStats({
    title: project.name,
    ...project.statistics,
  })

  Planner5D.view.projectView.drawRooms(project.rooms)
}

makeProject()
