import { Router } from "express";
import loginController from "../../../controllers/login/login/LoginController.js";
const loginRouter = Router();
loginRouter.post("/", loginController.token);
export default loginRouter;
//# sourceMappingURL=login.router.js.map