import express from "express";
import {PORT, ORIGIN} from './src/config/env.js';
import bookRouter from './src/routes/books.routes.js';
import studentRouter from './src/routes/student.routes.js';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: `${ORIGIN}`, 
    methods: 'GET, POST, PUT, DELETE', 
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/students', studentRouter);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.listen(PORT, ()=> {
    try{
        console.log(`Running on http://localhost:${PORT}`);
    } catch (err){
        console.log(err)
    }
})