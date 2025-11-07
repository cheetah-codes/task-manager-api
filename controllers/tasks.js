const taskModel = require("../models/task.js");

const getAllTask = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  //   // res.send("delete task with id")
  //   res.json({ id: req.params.id });

  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findOne({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `cannot find task with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = taskModel.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status.status(500).json({ msg: error });
  }
};


// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await taskModel.findOneAndDelete({ _id: taskID });

//     if (!task) {
//       return res.status(404).json({ msg: `Cannot delete task with id ${taskID}` });
//     }

//     res.status(200).json({ msg: "Task deleted successfully", task });
//   } catch (error) {
//       res.status(500).json({ msg: error.message });
//     }
// };

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    console.log("Deleting task with ID:", taskID);

    const task = await taskModel.findOneAndDelete({ _id: taskID });
    console.log("Found and deleted:", task);

    if (!task) {
      return res.status(404).json({ msg: `Cannot delete task with id ${taskID}` });
    }

    res.status(200).json({ msg: "Task deleted successfully", task });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ msg: error.message });
  }
};


const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
       res.status(200).json({id:taskID,data:req.body})
       const task = await taskModel.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
     if (!task) {
      return res.status(404).json({ msg: `Cannot update task with id ${taskID}` });
    }

    res.status(200).json({ msg: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };
