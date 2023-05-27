import {z} from 'zod';

export const userUpdateSchema = z.object({
  register_user_id: z.number(),
  description: z.string(),
  date: z.coerce.date(),
  reason: z.enum(["INATIVACAO"])
})

export type UserUpdateDTO = z.infer<typeof userUpdateSchema>;