
const Job=require("./model/job.model")
exports.createJob= async(req,res)=>{
    try{
        const job= new Job(req.body)
        await job.save()
        res.status(201).json(job);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}
exports.getJobs = async (req,res)=>{
    try {
        const jobs=await Job.find();
        res.json(jobs)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

exports.filterJobs= async (req,res)=>{
    try {
        const jobs=await Job.find({role:req.query.role});
        res.json(jobs);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

exports.sortJobs=async(req,res)=>{
    try {
        const jobs= await Job.find().sort({createdAt: -1});
        res.json(jobs);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
exports.searchJobs = async (req,res)=>{
    try {
        const jobs= await Job.find({language: {$regex:req.query.q,$options:"i"}});
        res.json(jobs);
    } catch (error) {
        res.status(400).json({error: error.message});
        
    }
}

exports.getJobsPage=async (req, res) => {
    try {
        const page=+(req.query.page)||1;
        const limit=+(req.query.limit)||10;
        const skip=(page-1)*limit;
        const jobs= await Job.find().skip(skip).limit(limit)
res.json(jobs);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}