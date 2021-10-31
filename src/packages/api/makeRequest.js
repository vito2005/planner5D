import log from '@src/packages/log'
import mockFetch from '@src/packages/mockFetch'

export default ({ url = '/', method = 'GET', params = {}, headers = {} }) =>
  // you can use here fetch, axios or another network requests api
  {
    return mockFetch(url, { method, params, headers }).catch((error) => {
      log.errorHandler(error, { url, method, params, headers })
      throw error
    })
  }
