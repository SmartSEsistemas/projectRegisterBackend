import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../protocols/RequestWithUser';
import prismaInstance from '../prisma/client.js';
import { AppMessage } from '../utils/AppMessage.js';

export function permission(permissionsRoutes: string[]) {
  return async ({ user }: RequestWithUser, res: Response, next: NextFunction) => {
    if (!user) throw new AppMessage('Usuário não recebido para as premissões');

    const userExists = await prismaInstance
      .prisma()
      .register_user.findUnique({
        where: { document: user.document },
        select: {
          Register_user_role: {
            select: {
              Register_role: {
                select: {
                  Register_roles_permission: {
                    select: {
                      Register_permission: true,
                    },
                  },
                },
              },
            },
          },
        },
      })
      .catch(() => {
        throw new AppMessage('Usuário não encontrado.');
      });

    const permissionExists = userExists?.Register_user_role.map((role) =>
      role.Register_role.Register_roles_permission.some((permission) =>
        permissionsRoutes.includes(permission.Register_permission?.name!),
      ),
    );

    console.log(permissionExists);
    // if (!permissionExists)
    //   throw new AppMessage('Usuário sem premissão para esta rota.');

    return next();
  };
}
