import './styles/project.scss'
import { project } from '@src/packages/api'
import { getParsedProjectData } from './packages/parse'
import { projectView } from './packages/draw'

async function makeProject() {
  const projectKey = new URLSearchParams(location.search).get('key')
  const data = await project.getProjectData(projectKey)

  const { title, roomsData, floors, rooms, otherItems } =
    getParsedProjectData(data)

  projectView.drawProjectStats({ title, floors, rooms, otherItems })
  projectView.drawRooms(roomsData)
}

makeProject()
