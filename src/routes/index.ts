import { NextFunction, Request, Response, Router } from "express";
<<<<<<< HEAD
import personRouter from "./person/person.router.js";
import userRouter from "./user.router.js";
import entityRouter from "./entity.router.js";
import organizationChartRouter from "./organizationChart.router.js";
import roleRouter from "./role.router.js";
import permissionRouter from "./permission.router.js";
import authentication from "../middlewares/Authentication.js";
import { permission } from "../middlewares/permissions.js";

const routes = Router();
routes.use("/person", personRouter);
routes.use("/user", userRouter);

routes.use("/entity",
  authentication.required,
  permission(['register_entity', 'update_entity']),
  entityRouter);

routes.use("/organization_chart",
  authentication.required,
  permission(['register_orgnization', 'update_organization']),
  organizationChartRouter);

routes.use("/role", roleRouter);
routes.use("/permission", permissionRouter);
=======
import userRoutes from "./user.router.js";

const routes = Router();
routes.use("/user", userRoutes);
>>>>>>> b9d0cbe40700cd7f77e5031c17922de2267c5bff

routes.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: 'Rota inválida' });
  next();
})

export default routes;