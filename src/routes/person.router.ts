import { Router } from "express";

import personController from "../controllers/PersonController.js";

const userRoutes = Router();

userRoutes.post("/register", personController.register);
userRoutes.put("/", personController.update);



export default userRoutes;