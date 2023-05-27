import {z} from 'zod';

export const roleSchema = z.object({
  name: z.string(),
  description: z.string(),
  module: z.string(),
  type: z.enum(["INSERIR", "EDITAR", "REMOVER", "VISUALIZAR"])
})

export type RoleDTO = z.infer<typeof roleSchema>;