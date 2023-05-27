import { Router } from "express";
import accessRequestController from "../../../controllers/login/request/AccessRequestController.js";

const recoverPasswordRouter = Router();

recoverPasswordRouter.post("/", accessRequestController.register);

export default recoverPasswordRouter;