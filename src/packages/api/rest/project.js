import makeRequest from '@src/packages/api/makeRequest'

export const getProjectData = (projectHash) =>
  makeRequest({ url: `/api/project/${projectHash}`, method: 'GET' })
