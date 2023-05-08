import { Request, Response } from "express";
import userService from "../services/UserService.js";
import { RequestWithUser } from "../protocols/RequestWithUser.js";
import { AppError } from "../helper/AppError.js";

class UserController {
  async login(req: Request, res: Response) {
    const result = await userService.token(req.body);
    return res.status(200).json(result);
  }

  async personRecord(req: RequestWithUser, res: Response) {
    if (!req.user) throw new AppError('Token incorreto ou inválido');
    const result = await userService.record(req.user);
    return res.status(200).json({ user: result });
  }

  async update(req: RequestWithUser, res: Response) {
    if (!req.user) throw new AppError('Token incorreto ou inválido');
    const result = await userService.update(req.user, req.body);
    return res.status(200).json(result);
  }

  async resetPassword(req: Request, res: Response) {
    if (!req.body) throw new AppError('Informações não enviadas.');
    const result = await userService.resetPassword(req.body);
    return res.status(200).json(result);

  }
}

export default new UserController();