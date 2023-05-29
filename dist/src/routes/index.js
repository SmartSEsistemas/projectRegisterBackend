import { Router } from "express";
import personRouter from "./person/person.router.js";
import userRouter from "./user.router.js";
const routes = Router();
routes.use("/person", personRouter);
routes.use("/user", userRouter);
routes.use((req, res, next) => {
    res.status(404).send({ message: 'Rota inválida' });
    next();
});
export default routes;
//# sourceMappingURL=index.js.map