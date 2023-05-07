import { Request, Response } from "express";
import { AppError } from "../helper/AppError.js";
import roleService from "../services/RoleService.js";

class RoleController {
  async register({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await roleService.create(body);
    return res.status(201).json({ result: "Role criada." });
  }

  async registerUserRole({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await roleService.createUserRole(body);
    return res.status(201).json({ result: "Role criada." });
  }
}

export default new RoleController();