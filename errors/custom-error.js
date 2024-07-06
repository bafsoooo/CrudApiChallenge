//this file is for creating custom errors

class CustomAPIError extends Error {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = statusCode
    }
}
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
  }
  
module.exports = { createCustomError, CustomAPIError }