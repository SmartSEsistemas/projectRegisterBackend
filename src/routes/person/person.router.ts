import { Router } from "express";
import naturalPersonRoutes from "./naturalPerson.router.js";
import legalPersonRoutes from "./legalPerson.router.js";

const routesPerson = Router();
routesPerson.use("/natural", naturalPersonRoutes);
routesPerson.use("/legal", legalPersonRoutes);

export default routesPerson;