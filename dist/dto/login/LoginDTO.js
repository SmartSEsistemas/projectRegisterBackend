import { z } from 'zod';
import isValidCPF from '../../validators/isValidCPF.js';
import isValidCNPJ from '../../validators/isValidCNPJ.js';
import { AppMessage } from '../../utils/AppMessage.js';
export const loginSchema = z.object({
    document: z.string().refine((value) => {
        const cleanedValue = value.replace(/\D/g, '');
        if (cleanedValue.length === 11)
            return isValidCPF(cleanedValue);
        if (cleanedValue.length === 14)
            return isValidCNPJ(cleanedValue);
        throw new AppMessage('CPF ou CNPJ inválido.', 400);
    }, 'CPF ou CNPJ inválido.'),
    password: z.string(),
    year: z.number(),
    entity: z.string(),
});
//# sourceMappingURL=LoginDTO.js.map