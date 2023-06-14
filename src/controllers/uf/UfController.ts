import { Response } from 'express';
import { RequestWithUser } from '../../protocols/RequestWithUser.js';
import { AppMessage } from '../../utils/AppMessage.js';
import ufService from '../../services/uf/UfService.js';

class UfController {
  async show({ user }: RequestWithUser, res: Response) {
    console.log(user);
    if (!user) throw new AppMessage('Token incorreto ou inválido');

    const result = await ufService.get();
    return res.status(200).json(result);
  }
}

export default new UfController();
