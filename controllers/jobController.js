import JobModal from '../models/jobModel.js';
import { StatusCodes } from 'http-status-codes';

// GET ALL JOBS
export const getAllJobs = async (req,res) => {
    const jobs = await JobModal.find({ createdBy: req.user.userId });

    res.status(StatusCodes.OK).json({jobs});
};

// CREATE JOB
export const createJob = async (req,res) => {
    req.body.createdBy = req.user.userId;
    const job = await JobModal.create(req.body);

    res.status(StatusCodes.CREATED).json({ job });
};

// GET SINGLE JOB
export const getSingleJob = async (req,res) => {
    const job = await JobModal.findById(req.params.id)

    res.status(StatusCodes.OK).json({job});
};

// EDIT JOB
export const editJob = async (req,res) => {
    const updatedJob = await JobModal.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(StatusCodes.OK).json({msg: "Job modified", job: updatedJob});
};

// DELETE JOB
export const deleteJob = async (req,res) => {
    const removedJob = await JobModal.findByIdAndDelete(req.params.id);
    
    res.status(StatusCodes.OK).json({msg: 'Job deleted', job: removedJob});
};
