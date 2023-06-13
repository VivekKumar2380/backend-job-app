const mongoose= require("mongoose")

const jobSchema=new mongoose.Schema({
    company:{type:String, required:true},
    city:{type:String, required:true},
    location:{type:String, required:true},
    role:{type:String, required:true},
    level:{type:String, required:true},
    contract:{type:String, required:true},
    position:{type:String,required:true},
    language:{type:String, required:true},
    createdAt:{type:Date, default: Date.now},
},{
    versionKey:false
})



module.exports=mongoose.model("jobs",jobSchema)