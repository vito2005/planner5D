import { Planner5D } from '@src/app'
import mockFetch from '@src/packages/mockFetch'

export default ({ url = '/', method = 'GET', params = {}, headers = {} }) =>
  // you can use here fetch, axios or another network requests api
  {
    return mockFetch(url, { method, params, headers }).catch((error) => {
      Planner5D.log.errorHandler(error, { url, method, params, headers })
      throw error
    })
  }
