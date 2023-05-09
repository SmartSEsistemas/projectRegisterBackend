import { Request, Response } from "express";
import { AppError } from "../helper/AppError.js";
import permissionService from "../services/PermissionService.js";

class PermissionController {
  async register({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await permissionService.create(body);
    return res.status(201).json({ result: "Role criada." });
  }

  async registerRolePermission({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await permissionService.createRolePermission(body);
    return res.status(201).json({ result: "Permissoes registradas." });
  }
}

export default new PermissionController();