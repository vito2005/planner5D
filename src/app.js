import './styles/styles.css'
import { projects } from '@src/packages/api'
import { drawList } from '@src/packages/draw'

async function makeProjectsList() {
  const projectsListData = await projects.getProjectsList()

  const projectsList = projectsListData.data.map((p) => ({
    url: `./project.html?key=${p.hash}`,
    itemTitle: `${p.hash}, ${p.title}`,
  }))

  drawList('projects', 'project', projectsList)
}

makeProjectsList()
