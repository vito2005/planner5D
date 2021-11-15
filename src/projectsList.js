import './styles/styles.css'
import { Planner5D } from './app'

async function makeProjectsList() {
  const projectsListData = await Planner5D.api.projects.getProjectsList()
  const projectsList = Planner5D.parse.getParsedProjectsList(projectsListData)

  Planner5D.view.showList({
    listClassName: 'projects',
    listItemClassName: 'project',
    arrayData: projectsList,
  })
}

makeProjectsList()
