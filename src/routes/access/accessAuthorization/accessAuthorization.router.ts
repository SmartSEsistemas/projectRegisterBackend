import { Router } from "express";
import accessAuthorizationController from "../../../controllers/access/accessAuthorization/AccessAuthorizationController.js";

const accessAuthorizationRouter = Router();

accessAuthorizationRouter.post("/", accessAuthorizationController.register);
accessAuthorizationRouter.put("/:id", accessAuthorizationController.update);
accessAuthorizationRouter.get("/:id", accessAuthorizationController.show);
accessAuthorizationRouter.delete("/:id", accessAuthorizationController.delete);


export default accessAuthorizationRouter;