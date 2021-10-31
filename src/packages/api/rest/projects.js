import makeRequest from '@src/packages/api/makeRequest'

export const getProjectsList = (count) =>
  makeRequest({
    url: '/api/projects',
    method: 'GET',
    params: { count },
  })
