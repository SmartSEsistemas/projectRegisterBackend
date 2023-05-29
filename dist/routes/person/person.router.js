import { Router } from "express";
import naturalPersonRoutes from "./naturePerson/naturalPerson.router.js";
import legalPersonRoutes from "./legalPerson/legalPerson.router.js";
const routesPerson = Router();
routesPerson.use("/natural", naturalPersonRoutes);
routesPerson.use("/legal", legalPersonRoutes);
export default routesPerson;
//# sourceMappingURL=person.router.js.map