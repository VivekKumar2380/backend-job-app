const express=require("express")
const  {connection}=require("./db")
const jobsRouter=require("./routes/jobs.routes")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    console.log("verified")
    next()
 })

 app.use('/api',jobsRouter)

 

 app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to the Db")
        console.log("server is running at port 8080")
    } catch (error) {
        console.log(error.message)
    }
 })