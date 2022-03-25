const express = require("express")


const app=express()


// const port= 5001


const mongoose=require("./db")

const cors = require("cors")



app.use(express.json())


app.use(cors())


app.use("/todo",require("./routes/todo"))


mongoose.on("connected",(err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("connected to mongo db")
    }
})

app.get("/",(req,res)=>{
    res.send("Api Connected")
})

app.listen("5001",(req,res)=>{
    console.log(`server is connected 5001`)
})