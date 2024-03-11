const express = require("express")
const bodyparser=require('body-parser')
const app = express()
const port = 8080
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res,next)=>{
    try {
        res.status(200).send(`welcome to server`)
        
    } catch (error) {
        console.log(error);
    }
})
app.post("/post",(req,res,next)=>{
    const params = req.body;
    try {
        res.status(200).send(`welcome to server ${params.name}`)
        
    } catch (error) {
        console.log(error);
    }
})


app.listen(port,()=>{
    console.log(`app is running on => http://localhost:${port}`);
})