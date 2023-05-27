import {z} from 'zod';
import { userSchema } from './UserDTO.js';

export const userUpdateSchema = z.object({
  user_data: userSchema,
  register_user_id: z.number(),
  description: z.string(),
  date: z.coerce.date(),
  reason: z.enum(["INATIVACAO"])
})

export type UserUpdateDTO = z.infer<typeof userUpdateSchema>;