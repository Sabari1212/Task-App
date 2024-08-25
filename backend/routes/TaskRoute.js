const express=require("express");
const router=express.Router();
const {newTask,getTask,singletask,updateTask,deleteTask}=require("../TaskController/taskController")

router.post("/",newTask);
router.get("/",getTask);
router.get("/:id",singletask)
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask)
module.exports=router;