const mongoose=require("mongoose")
const schema=mongoose.Schema
const new_schema=new schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },

},
{timestamps:true},
)  ; 
module.exports=mongoose.model("Task",new_schema);