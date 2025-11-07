const mongoose = require("mongoose");
// import  from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true,'must provide name'],
    trin:true,
    maxlength:[20,"name cannot exceed 20 chharacters"]
},
  completed: {
    type:Boolean,
    default:false
},
});


const taskModel = mongoose.model("Task", TaskSchema);

// export default taskModel
module.exports = taskModel