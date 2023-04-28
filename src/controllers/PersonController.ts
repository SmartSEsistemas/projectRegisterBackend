import { Request, Response } from "express";
import servicePerson from "../services/ServicePerson.js";

class PersonController {
  async register(req: Request, res: Response) {
    const result = await servicePerson.create(req.body);
    return res.status(201).json(result);
  }

  async update(req: Request, res: Response) {
    await servicePerson.update(req.body);
    return res.status(201).json({result: 'ok'});
  }
}

export default new PersonController();