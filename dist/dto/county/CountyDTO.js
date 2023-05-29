import { z } from 'zod';
export const countySchema = z.object({
    description: z.string(),
    nb_ibge: z.string(),
    uf_id: z.number()
});
//# sourceMappingURL=CountyDTO.js.map