import { readFileSync } from 'fs'
import { join } from 'path'
import { strictEqual, deepStrictEqual } from 'assert'
import { getParsedProjectData } from '../src/packages/parse/index.js'
import { Project } from '../src/domain/project.js'

const mockProject = JSON.parse(
  readFileSync(
    join(
      __dirname,
      '../src/mocks/project/1e15df86b3ca859549cc93f723264a5c.json'
    )
  )
)

describe('Create project from parsed mocks and check statistics and name.', function () {
  it('Name and statistics are correct', function () {
    const expectedProjectStatistics = {
      floorsCount: 2,
      roomsCount: 18,
      otherItemsCount: 362,
    }
    const expectedProjectName = 'Scandinavian Beach House'

    const projectData = getParsedProjectData(mockProject)
    const project = new Project({
      id: projectData.hash,
      ...projectData,
    })

    strictEqual(project.name, expectedProjectName)
    deepStrictEqual(project.statistics, expectedProjectStatistics)
  })
})
