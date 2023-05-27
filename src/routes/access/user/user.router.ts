import { Router } from "express";
import userController from "../../../controllers/access/user/UserController.js";

const userRouter = Router();

userRouter.post("/", userController.register);
userRouter.put("/", userController.update);
userRouter.get("/:id", userController.show);
userRouter.delete("/:id", userController.delete);

export default userRouter;
