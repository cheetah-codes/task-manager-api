const mongoose = require("mongoose");
// import  from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});


const taskModel = mongoose.model("Task", TaskSchema);

// export default taskModel
module.exports = taskModel