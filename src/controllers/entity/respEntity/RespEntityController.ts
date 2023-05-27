import { Response } from "express";
import { RequestWithUser } from "../../../protocols/RequestWithUser";
import { AppMessage } from "../../../utils/AppMessage.js";
import respEntityService from "../../../services/entity/respEntity/RespEntityService.js";
import { respEntitySchema } from "../../../dto/entity/resp/RespEntityDTO.js";
import { respEntityUpdadeSchema } from "../../../dto/entity/resp/RespEntityUpdateDTO.js";

class RespEntityController {
  async register({ body, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    const data = respEntitySchema.parse(body);
    await respEntityService.create(data, user.user_id);
    return res.status(201).json(new AppMessage("Responsável pela entidade cadastrado com sucesso.", 201));
  }

  async update({params, body, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    if(!params.start_date) throw new AppMessage('start_date não informado ou incorreto.');
    const data = respEntityUpdadeSchema.parse(body);
    await respEntityService.update(data, user.user_id, user.entity_id, params.start_date);
    return res.status(200).json(new AppMessage("Responsável pela entidade atualizado com sucesso.", 200));
  }

  async show({ params, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    if(!params.start_date) throw new AppMessage('start_date não informado ou incorreto.');
    const result = await respEntityService.get(user.entity_id, params.start_date);
    return res.status(200).json(result);
  }

  async delete({params, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    if(!params.start_date) throw new AppMessage('start_date não informado ou incorreto.');
    await respEntityService.delete(user.entity_id, params.start_date);
    return res.status(200).json(new AppMessage("Responsável pela entidade deletado com sucesso.", 200));
  }
}

export default new RespEntityController();