import { AuthController } from "../controller/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/login", AuthController.Login);
router.post("/register", AuthController.Register);

export default router;
