import { Router } from "express";
import userRouter from "./user/user.router.js";
import roleRouter from "./role/role.router.js";
import accessAuthorizationRouter from "./accessAuthorization/accessAuthorization.router.js";
import permissionRouter from "./permission/permission.router.js";

const accessRouter = Router();

accessRouter.use("/user", userRouter);
accessRouter.use("/role", roleRouter);
accessRouter.use("/permission", permissionRouter);
accessRouter.use("/access_authorization", accessAuthorizationRouter);

export default accessRouter;