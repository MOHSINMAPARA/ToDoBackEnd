const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    taskTitle: "string",
    taskCount: Number,
    taskName:"string"
  

})
module.exports=mongoose.model("todo",userSchema)