import { Response } from "express";
import { RequestWithUser } from "../../../protocols/RequestWithUser";
import { AppMessage } from "../../../utils/AppMessage.js";
import { organizationChartRespSchema } from "../../../dto/organizationChart/resp/OrganizationChartRestDTO.js";
import { organizationChartRespUpdateSchema } from "../../../dto/organizationChart/resp/OrganizationChartRespUpdateDTO.js";
import organizationChartRespService from "../../../services/organizationChart/resp/OrganizationChartRespService.js";

class OrganizationChartRespController {
  async register({ body, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    const data = organizationChartRespSchema.parse(body);
    await organizationChartRespService.create(data, user.user_id);
    return res.status(201).json(new AppMessage("Responsável pelo organograma cadastrado com sucesso.", 201));
  }

  async update({params, body, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    if(!params.id || !Number(params.id)) throw new AppMessage('ID não informado ou incorreto.');
    const data = organizationChartRespUpdateSchema.parse(body);
    await organizationChartRespService.update(data, user.user_id, Number(params.id));
    return res.status(200).json(new AppMessage("Responsável pelo organograma atualizado com sucesso.", 200));
  }

  async show({ params, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    if(!params.id || !Number(params.id)) throw new AppMessage('ID não informado ou incorreto.');
    const result = await organizationChartRespService.get(Number(params.id));
    return res.status(200).json(result);
  }

  async delete({params, user }: RequestWithUser, res: Response) {
    if (!user ) throw new AppMessage('Token incorreto ou inválido');
    if(!params.id || !Number(params.id)) throw new AppMessage('ID não informado ou incorreto.');
    await organizationChartRespService.delete(Number(params.id));
    return res.status(200).json(new AppMessage("Responsável pelo organograma deletado com sucesso.", 200));
  }
}

export default new OrganizationChartRespController();