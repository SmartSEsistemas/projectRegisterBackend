import { Router } from "express";
import userController from "../../controllers/user/UserContoller.js";
import authentication from "../../middlewares/Authentication.js";
const userRouter = Router();
userRouter.post("/login", userController.login);
userRouter.get("/", authentication.required, userController.personRecord);
userRouter.put("/", authentication.required, userController.update);
export default userRouter;
//# sourceMappingURL=user.router.js.map