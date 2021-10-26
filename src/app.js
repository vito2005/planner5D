import './styles/styles.css'

import projects from '@src/assets/projects.json'

const getApiUrl = (projectId) => `./project.html?key=${projectId}`

const htmlProjects = projects.map((p) =>
  $(`<li></li>`)
    .addClass('project')
    .append($(`<a href="${getApiUrl(p.hash)}">${p.hash}, ${p.title}</a>`))
)

$('ul.projects').append(htmlProjects)
