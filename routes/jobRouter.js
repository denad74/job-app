import { Router } from "express";
import {getAllJobs, createJob, editJob, getSingleJob, deleteJob} from '../controllers/jobController.js';
import { validateIdParam, validateJobInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.route('/').get(getAllJobs). post(validateJobInput,createJob);
router.route('/:id').get(validateIdParam, getSingleJob).patch(validateJobInput, validateIdParam, editJob).delete(validateIdParam, deleteJob);

export default router;