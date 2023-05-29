import { Router } from "express";
import recoverPasswordContoller from "../../../controllers/login/recover/RecoverPasswordContoller.js";
const recoverPasswordRouter = Router();
recoverPasswordRouter.post("/", recoverPasswordContoller.revocer);
export default recoverPasswordRouter;
//# sourceMappingURL=recoverPasswrod.router.js.map