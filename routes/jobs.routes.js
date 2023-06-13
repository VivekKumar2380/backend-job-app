const express=require('express');
const jobsController=require("../jobs.controller")
const router=express.Router();
router.post("/jobs", jobsController.createJob);
router.get("/jobs",jobsController.getJobs);
router.get("/jobs/filter", jobsController.filterJobs);
router.get("/jobs/sort",jobsController.sortJobs);
router.get("/jobs/search",jobsController.searchJobs);
router.get("/jobs/page",jobsController.getJobsPage)
module.exports=router;