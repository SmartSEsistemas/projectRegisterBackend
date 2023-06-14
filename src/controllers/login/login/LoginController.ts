import { Request, Response } from 'express';
import { loginSchema } from '../../../dto/login/LoginDTO.js';
import loginService from '../../../services/login/login/LoginService.js';

class LoginController {
  async token({ body }: Request, res: Response) {
    const data = loginSchema.parse(body);
    const token = await loginService.token(data);
    return res.status(200).json(token);
  }
}

export default new LoginController();
