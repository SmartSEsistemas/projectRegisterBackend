import { NextFunction, Request, Response, Router } from "express";
import personRouter from "./person/person.router.js";
import accessRouter from "./access/access.router.js";
import authentication from "../middlewares/Authentication.js";
import baseEntityModuleRouter from "./entity/baseEntityModule.router.js";
import baseLoginRouter from "./login/baseLogin.router.js";

const routes = Router();
routes.use("/access", 
authentication.required,
accessRouter);

routes.use("/person", 
  authentication.required,
  personRouter);

routes.use("/entity",
  authentication.required,
  baseEntityModuleRouter);

routes.use("/login", 
  baseLoginRouter);


routes.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: 'Rota inválida' });
  next();
})

export default routes;