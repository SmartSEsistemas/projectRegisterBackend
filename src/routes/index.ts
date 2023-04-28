import { NextFunction, Request, Response, Router } from "express";
import personRoutes from "./person.router.js";

const routes = Router();
routes.use("/person", personRoutes);

routes.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: 'Rota inválida' });
  next();
})

export default routes;