// import express from "express";
// import { getAllTask,getTask,createTask,updateTask,deleteTask} from "../controllers/tasks.js"

const express = require("express");
const  { getAllTask,getTask,createTask,updateTask,deleteTask} = require("../controllers/tasks.js")

 const router= express.Router();


router.route("/").get(getAllTask).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)


module.exports={router}