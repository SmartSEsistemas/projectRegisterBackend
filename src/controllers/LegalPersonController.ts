import { Request, Response } from "express";
import legalPersonService from "../services/person/LegalPersonService.js";
import { PersonController } from "../protocols/PersonController.js";
import { RequestWithUser } from "../protocols/RequestWithUser.js";
import { AppError } from "../helper/AppError.js";

class LegalPersonController implements PersonController {
  async register({ file, body }: Request, res: Response) {
    if (!file || !body.data) throw new AppError('Informações não enviadas');
    const result = await legalPersonService.create(JSON.parse(body.data), file);
    return res.status(201).json(result);
  }

  async update({ user, body, file }: RequestWithUser, res: Response) {
    if (!user || !body.data) throw new AppError('Token incorreto ou inválido');
    const result = await legalPersonService.update(user, JSON.parse(body.data), file);
    return res.status(200).json(result);
  }

}

export default new LegalPersonController();