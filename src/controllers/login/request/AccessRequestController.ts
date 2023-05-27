import { Response } from "express";
import { RequestWithUser } from "../../../protocols/RequestWithUser";
import { AppMessage } from "../../../utils/AppMessage.js";
import { AccessRequestSchema } from "../../../dto/login/accessRequest/AccessRequestDTO.js";
import accessRequestService from "../../../services/login/accessRequest/AccessRequestService.js";

class AccessRequestController {
  async register({ body, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    const data = AccessRequestSchema.parse(body);
    await accessRequestService.create(data, user.user_id, user.entity_id);
    return res.status(201).json(new AppMessage("Solicitação de acesso cadastrado com sucesso.", 201));
  }
}

export default new AccessRequestController();