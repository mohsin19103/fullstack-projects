const asyncHandler =(resHandeler)=>{
(req,res,next)=>{
  Promise.resolve(resHandeler(res,req,next)).catch((err)=>next(err))
}
}
export {asyncHandler}