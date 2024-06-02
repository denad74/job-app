import { StatusCodes } from "http-status-codes";
import UserModel from "../models/userModel.js";
import JobModel from "../models/jobModel.js";

export const getCurrentUser = async (req,res) => {
    const user = await UserModel.findOne({_id: req.user.userId});
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req,res) => {
    const users = await UserModel.countDocuments();
    const jobs= await JobModel.countDocuments();
    res.status(StatusCodes.OK).json({users, jobs})
};

export const updateUser = async (req,res) => {
    const obj = {...req.body};
    delete obj.password;
    const updatedUser = await UserModel.findByIdAndUpdate(req.user.userId, obj);
    res.status(StatusCodes.OK).json({msg: 'user updated'})
};