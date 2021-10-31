export default (url) => {
  const filename = url.replace('/api/', '')

  return import(`@src/mocks/${filename}.json`)
}
