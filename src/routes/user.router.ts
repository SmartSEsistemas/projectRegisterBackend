import { Router } from "express";
<<<<<<< HEAD
import userController from "../controllers/UserContoller.js";
import authentication from "../middlewares/Authentication.js";
const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operações relacionadas aos usuários
 */
/**
 * @swagger
 *
 * /user/login:
 *   post:
 *     summary: Login do usuário
 *     description: Retorna o token do usuário
 *     tags: [User]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: login
 *         description: Login do usuário
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             document:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Token do usuário
 *         schema:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *       400:
 *         description: Error
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 */
userRouter.post("/login", userController.login);
userRouter.get("/", authentication.required, userController.personRecord);
/**
 * @swagger
 *
 * /user:
 *   put:
 *     summary: Atualiza usuário
 *     description: Atualiza informações referente ao usuário
 *     tags: [User]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: update_user
 *         description: Atualiza usuário
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *               old_password:
 *                  type: string
 *               new_password:
 *                  type: string
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 *       400:
 *         description: Error
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 */
userRouter.put("/", authentication.required, userController.update);
/**
 * @swagger
 *
 * /user/:
 *   post:
 *     summary: Resetar senha do usuário
 *     description: Reseta a senha do usuário referente ao documento informado
 *     tags: [User]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: reset_password
 *         description: Reseta a senha
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               document:
 *                  type: string
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 *       400:
 *         description: Error
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 */
userRouter.post("/reset", userController.resetPassword);

export default userRouter;
=======

import userController from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.post("/", userController.register);


export default userRoutes;
>>>>>>> b9d0cbe40700cd7f77e5031c17922de2267c5bff
