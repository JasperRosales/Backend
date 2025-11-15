import { Router } from "express";
import { getAllbooks,addSomeBook, updateBook, deleteBook} from "../controller/book.controller.js";

const router = Router();

router.get('/all',getAllbooks);
router.post('/add', addSomeBook);
router.put('/edit/:bookId', updateBook);
router.delete('/delete/:bookId', deleteBook);

export default router;