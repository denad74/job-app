// IMPORT PACKAGES
import 'express-async-errors'
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';


// IMPORT ROUTERS
import jobRouter from './routes/jobRouter.js';

// Middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

const port = process.env.PORT || 5100;

const app = express();

if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));
};

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/api/v1/jobs', jobRouter);

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


