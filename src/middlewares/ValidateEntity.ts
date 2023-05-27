import { NextFunction, Response } from "express";
import { RequestWithUser } from "../protocols/RequestWithUser";
import { AppMessage } from "../utils/AppMessage";
import prismaInstance from '../prisma/client.js';

export default class ValidadeEntity {

  static async required(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      // await prismaInstance.prisma().register_entity.findUnique

      next();
    } catch (error) {
      throw new AppMessage("Entidade inválido ou não enviado", 404);
    }
  };
}