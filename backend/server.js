const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("dotenv").config();
const taskRoutes=require("./routes/TaskRoute");
const cors=require('cors');


app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI
).then(()=>
{
    app.listen(process.env.PORT,()=>{
        console.log("DB Connected Successfully Listen to port "+ process.env.PORT);
    });
    

}).catch((error)=>{
    console.log(error);
});
app.use("/api/tasks",taskRoutes);

