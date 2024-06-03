// IMPORT PACKAGES
import 'express-async-errors'
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

// IMPORT ROUTERS
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// Middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

const port = process.env.PORT || 5100;

const app = express();

if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));
};
app.use(cookieParser())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/v1/test', (req,res) => {
    res.json({msg: 'test route'})
})

app.use('/api/v1/jobs',authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.use('*', (req,res) => {
    res.status(404).json({msg: "Not Found!"})
})

app.use(errorHandlerMiddleware);

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Server is listening on port: ${port}`);
    });
    
} catch (error) {
    console.log(error);
    process.exit(1)
}


