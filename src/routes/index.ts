import { NextFunction, Request, Response, Router } from "express";
import userRoutes from "./user.router.js";

const routes = Router();
routes.use("/user", userRoutes);

routes.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: 'Rota inválida' });
  next();
})

export default routes;