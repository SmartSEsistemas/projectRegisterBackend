import { Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppMessage } from "../utils/AppMessage.js";
import { RequestWithUser } from "../protocols/RequestWithUser.js";

const secretKey = process.env.JWT_SECRET || 'defaultSecret';

export default class Authentication {

  static required(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) throw new AppMessage("Token inválido ou não enviado");
      const decode = jwt.verify(token, secretKey) as JwtPayload;
      if (decode.user) req.user = decode.user;

      next();
    } catch (error) {
      throw new AppMessage("Token inválido ou não enviado", 401);
    }
  };
}