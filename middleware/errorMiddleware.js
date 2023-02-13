const errorMiddleware=(err,req,res,next)=>{
console.log(err)
res.status(500).json({msg:'theres an error'})
}
export default errorMiddleware