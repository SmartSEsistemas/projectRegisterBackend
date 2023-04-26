import { Request, Response } from "express";

class UserController {
  async register(req: Request, res: Response) {
    console.log('controler');
    return res.status(201).json({result: 'ok'});
  }
}

export default new UserController();