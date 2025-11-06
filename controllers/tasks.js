const taskModel = require("../models/task.js");

const getAllTask = (req, res) => {
  res.send("All items");
};

const getTask = (req, res) => {
  // res.send("delete task with id")
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  const task = taskModel.create(req.body);
  res.status(201).json(req.body);
};

const updateTask = (req, res) => {
    res.send("update task");
}

const deleteTask = (req, res) => {
  res.send("delete tasks");
};

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };
