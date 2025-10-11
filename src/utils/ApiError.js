class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false
      his.errors = errors

    if (statck){
     this.stack = statck
    }else{
      Error.captureStackTrace(this, thiscunstructor)
    }
    
  }
}


export {ApiError}