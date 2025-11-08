import { Router } from "express";
import { getAllbooks,addSomeBook, updateBook} from "../controller/book.controller.js";

const router = Router();

router.get('/test',getAllbooks);
router.post('/add', addSomeBook);
router.put('/update', updateBook);

export default router;