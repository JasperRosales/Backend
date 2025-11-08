import { Router } from "express";

import { getAllStudents } from "../controller/student.controller.js";


const router = Router();

router.get('/all',getAllStudents);


export default router;

