const errorHandler = (error, requestData) => {
  // you can use here some logger to send error stats to your server
  console.error(error, requestData)
}
export default {
  errorHandler,
}
