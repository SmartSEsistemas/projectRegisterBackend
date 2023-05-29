import { Router } from "express";
import loginPersonController from "../../controllers/LoginPersonContoller.js";
const loginRouter = Router();
loginRouter.post("/", loginPersonController.login);
export default loginRouter;
//# sourceMappingURL=login.router.js.map