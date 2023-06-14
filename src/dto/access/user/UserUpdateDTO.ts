import { z } from 'zod';
import { userSchema } from './UserDTO.js';

const user = userSchema.omit({
  start_date: true,
  active: true,
  type_person: true,
  document: true,
  register_entity_id: true,
  register_person_id: true,
});

export const userUpdateSchema = z.object({
  user_data: user,
  register_user_id: z.number(),
  description: z.string(),
  date: z.coerce.date(),
  reason: z.enum(['INATIVACAO']),
});

export type UserUpdateDTO = z.infer<typeof userUpdateSchema>;
