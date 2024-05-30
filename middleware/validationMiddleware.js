import {body, param, validationResult} from "express-validator";
import mongoose from "mongoose";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import jobModel from "../models/jobModel.js";

const withValidationErrors = (validateValues) => {
    return [
        validateValues, 
        (req,res,next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errMsg = errors.array().map((error)=> error.msg);
            if(errMsg[0].startsWith('no job')){
            throw new NotFoundError(errMsg);
        }
            throw new BadRequestError(errMsg);
        }
        next();
    },
  ]
}

export const validateJobInput = withValidationErrors([
    body('company').notEmpty().withMessage('company is required'),
    body('position').notEmpty().withMessage('position is required'),
    body('jobLocation').notEmpty().withMessage('job location is required'),
    body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('invalid status value'),
    body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('invalid type value'),
]);

export const validateIdParam = withValidationErrors([
    param('id')
    .custom(async (value)=> {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if(!isValidId) throw new BadRequestError('Invalid mongoDB id');

        const job = await jobModel.findById(value);
        if(!job) throw new NotFoundError(`no job with ${value}`);
    }),
]);