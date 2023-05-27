import {z} from 'zod';
import { naturalPersonUpdadeSchema } from '../../person/natural/NaturalPersonUpdateDTO.js';
import { legalNatureSchema } from '../../entity/legalNature/LegalNatureDTO.js';

export const AccessRequestSchema = z.object({
  person_data: z.union([naturalPersonUpdadeSchema, legalNatureSchema]),
  password: z.string(),
  reason: z.enum(["USUARIO ADMINISTRATIVO", "TRIBUTARIO", "PROTOCOLO", "OUVIDORIA"])
})

export type AccessRequestDTO = z.infer<typeof AccessRequestSchema>;