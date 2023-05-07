import { Request, Response } from "express";
import { AppError } from "../helper/AppError.js";
import entityService from "../services/EntityService.js";

class EntityController {
  async registerUf({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await entityService.createUf(body);
    return res.status(201).json({ result: "Uf criada" });
  }

  async registerCounty({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await entityService.createCounty(body);
    return res.status(201).json({ result: "Municipio criada." });
  }

  async registerLegalNatural({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await entityService.createLegalNature(body);
    return res.status(201).json({ result: "Natureza jurídica criada." });
  }

  async registerAdminType({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await entityService.createAdminType(body);
    return res.status(201).json({ result: "Tipo de administrador criada." });
  }

  async registerEntityType({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await entityService.createEntityType(body);
    return res.status(201).json({ result: "Tipo de entidade criada." });
  }

  async registerEntity({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await entityService.createEntity(body);
    return res.status(201).json({ result: "Entidade criada." });
  }

  async registerRespEntity({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await entityService.createRespEntity(body);
    return res.status(201).json({ result: "Responsabilidade da entidade criada." });
  }

  async updateRespEntity({ body }: Request, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    await entityService.updateRespEntity(body);
    return res.status(200).json({ result: "Responsabilidade da entidade atualizada." });
  }

}

export default new EntityController();