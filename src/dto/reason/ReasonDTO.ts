import {z} from 'zod';

export const reasonSchema = z.object({
  description: z.string(),
  person_id: z.number(),
  reason: z.enum(["ALTERACAO", "INATIVACAO"]),
  date: z.coerce.date()
})

export type ReasonDTO = z.infer<typeof reasonSchema>