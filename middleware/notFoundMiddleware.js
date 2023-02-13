const notFoundMiddleware=(req,res,next)=>{
    res.status(404).json({msg:'Not Found'})
}
export default notFoundMiddleware