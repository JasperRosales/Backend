import { Router } from "express";

import { getAllStudents, addStudent, updateStudent, deleteStudent } from "../controller/student.controller.js";


const router = Router();

router.get('/all',getAllStudents);
router.post('/add', addStudent);
router.put('/edit/:studentId', updateStudent);
router.delete('/delete/:studentId', deleteStudent);

export default router;

