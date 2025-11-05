console.log(" worked")
import express from "express"
import { router as tasks

} from "./routes/tasks.js"
const app = express()
const port = 3000

//middleware
// app.use(express.static("./public"))

app.use(express.json())

//routes
app.get("/hello",(req,res)=>{
    res.send("Task manager App")
})

app.use('/api/v1/tasks',tasks)

app.listen(port,()=>{
    console.log(`successfully connected to server on port ${port}...`);
    
})

