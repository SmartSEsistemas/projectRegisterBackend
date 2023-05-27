// import { Request, Response } from "express";
// import userService from "../../services/user/UserService.js";
// import { RequestWithUser } from "../../protocols/RequestWithUser.js";
// import { AppMessage } from "../../utils/AppMessage.js";
// import { loginUserSchema } from "../../dto/user/LoginUserDTO.js";

// class UserController {
//   async login(req: Request, res: Response) {
//     const data = loginUserSchema.parse(req.body);
//     const result = await userService.token(data);
//     return res.status(201).json(result);
//   }

//   async personRecord(req: RequestWithUser, res: Response) {
//     if (!req.user) throw new AppMessage('Token incorreto ou inválido');
//     const result = await userService.record(req.user);
//     return res.status(200).json({ user: result });
//   }

//   async update(req: RequestWithUser, res: Response) {
//     if (!req.user) throw new AppMessage('Token incorreto ou inválido');
//     const result = await userService.update(req.user, req.body);
//     return res.status(200).json(result);
//   }
// }

// export default new UserController();