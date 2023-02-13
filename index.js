import express from 'express'
import notFoundMiddleware from './middleware/notFoundMiddleware.js'
import errorMiddleware from './middleware/errorMiddleware.js'

import connectDB from './db/connect.js'
const app=express()

app.get('/',(req,res)=>{
    // throw new Error('error')
    res.send('basic server setup')
})
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port=3000||process.env.PORT

const start=async()=>{
try {
    await connectDB()
    app.listen(port,()=>console.log(`server is up on port http://localhost:${port}`))
} catch (error) {
console.log(error)
}
}
start()



