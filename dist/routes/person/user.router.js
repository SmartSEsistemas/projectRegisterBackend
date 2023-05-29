import { Router } from "express";
import userController from "../../controllers/UserContoller.js";
import authentication from "../../middlewares/Authentication.js";
const userRouter = Router();
userRouter.post("/login", userController.login);
userRouter.get("/record", authentication.required, userController.personRecord);
export default userRouter;
//# sourceMappingURL=user.router.js.map