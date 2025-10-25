import express from "express";
import {PORT} from './src/config/env.js';
import productRouter from './src/routes/product.route.js';

const app = express();

app.use(express.json());

app.use('/api/v1/products', productRouter);

app.listen(PORT, ()=> {
    try{
        console.log(`Running on http://localhost:${PORT}`);
    } catch (err){
        console.log(err)
    }
})