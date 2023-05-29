import { z } from 'zod';
export const adminTypeSchema = z.object({
    description: z.string(),
    register_legal_nature_id: z.number(),
    admin_type: z.enum(["DIRETA", "INDIRETA"]),
    power: z.enum(["EXECUTIVO", "LEGISLATIVO"])
});
//# sourceMappingURL=AdminTypeDTO.js.map