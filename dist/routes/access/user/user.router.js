import { Router } from "express";
import userController from "../../../controllers/access/user/UserController.js";
import { permission } from "../../../middlewares/permissions.js";
const userRouter = Router();
userRouter.post("/", permission(["create_user"]), userController.register);
userRouter.put("/", permission(["update_user"]), userController.update);
userRouter.get("/:id", permission(["get_user"]), userController.show);
userRouter.delete("/:id", permission(["delete_user"]), userController.delete);
export default userRouter;
//# sourceMappingURL=user.router.js.map