const mongoose  = require("mongoose");
const taskmodel=require("../models/taskmodel");

const newTask= async (req,res)=>{
    const {title,description}=req.body;
    try{
        const task= await taskmodel.create({title,description});
        res.status(200).json(task);

    }catch(e){
        res.status(400).json( {error: e.message});
        

    }
};
const getTask=async(req,res)=>{
    try{
        const tasks=await taskmodel.find({});
        res.status(200).json(tasks);

    }catch(e){
        res.status(400).json( {error: e.message});

    }
};
const singletask=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Task not found"});

    }
    try{
        const singletasks=await taskmodel.findById(id);
        res.status(200).json(singletasks);
    }catch(e){
        res.status(400).json({error:e.message});
    }

};
const updateTask=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Task not found"});
    }
    try{
        const task=await taskmodel.findByIdAndUpdate({
            _id:id
        },
        {
        ...req.body
        });
    res.status(200).json(task);

    }catch(e){
        res.status(400).json({error:e.message})
    }
};
const deleteTask=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Task not found"});
    }
    try{
        const task=await taskmodel.findByIdAndDelete(id);
         res.status(200).json(task);

    }catch(e){
        res.status(400).json({error:e.message})
    }
};
   
module.exports={newTask,getTask,singletask,updateTask,deleteTask};
