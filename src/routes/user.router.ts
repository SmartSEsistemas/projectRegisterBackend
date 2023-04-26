import { Router } from "express";

import userController from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.post("/", userController.register);


export default userRoutes;