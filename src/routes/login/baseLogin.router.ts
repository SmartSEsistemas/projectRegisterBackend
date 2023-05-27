import { Router } from "express";
import authentication from "../../middlewares/Authentication.js";
import accessRequestRouter from "./accessRequest/accessRequest.router.js";

const baseLoginRouter = Router();

baseLoginRouter.use("/access_request", 
  authentication.required,
accessRequestRouter);




// baseLoginRouter.use("/organization_config", baseOrganizationChart);

export default baseLoginRouter;