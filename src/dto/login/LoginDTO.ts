import {z} from 'zod';
import isValidCPF from '../../validators/isValidCPF.js';
import isValidCNPJ from '../../validators/isValidCNPJ.js';

export const loginSchema = z.object({
  document: z.string().refine((value) => {
    const cleanedValue = value.replace(/\D/g, '');
    if (cleanedValue.length === 11) return isValidCPF(cleanedValue);
    if (cleanedValue.length === 14) return isValidCNPJ(cleanedValue);
    return false;
  }, 'CPF ou CNPJ inválido'),
  password: z.string(),
  year: z.number(),
  entity: z.string()
})

export type LoginDTO = z.infer<typeof loginSchema>;