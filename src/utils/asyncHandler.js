const asyncHandler = (requestHEandler) =>{
  (req, res, next)=>{
    Promise.resolve(requestHEandler(req, res, next)).catch((err)=> next(err))
  }
}


export {asyncHandler}