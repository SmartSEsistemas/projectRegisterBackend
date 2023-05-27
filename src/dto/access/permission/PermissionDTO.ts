import {z} from 'zod';

export const permissionSchema = z.object({
  name: z.string(),
  description: z.string(),
  roles_ids: z.number().array()
})

export type PermissionDTO = z.infer<typeof permissionSchema>;