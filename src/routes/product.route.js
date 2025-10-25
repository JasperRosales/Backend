import {Router} from 'express';
import {test, data} from '../controller/product.controller.js';


const router = Router();

router.get('/test', test);
router.get('/data', data);


export default router;