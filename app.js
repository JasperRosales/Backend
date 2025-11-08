import express from "express";
import {PORT} from './src/config/env.js';
import bookRouter from './src/routes/books.routes.js';
import studentRouter from './src/routes/student.routes.js';

const app = express();

app.use(express.json());

app.use('/api/v1/books', bookRouter);
app.use('/students', studentRouter);

app.listen(PORT, ()=> {
    try{
        console.log(`Running on http://localhost:${PORT}`);
    } catch (err){
        console.log(err)
    }
})