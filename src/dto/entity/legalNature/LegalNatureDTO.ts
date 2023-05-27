import {z} from 'zod';

export const legalNatureSchema = z.object({
  nb_legal_nature: z.string(),
  description: z.string(),
  start_date: z.coerce.date(),
  final_date: z.coerce.date()
})

export type LegalNatureDTO = z.infer<typeof legalNatureSchema>;