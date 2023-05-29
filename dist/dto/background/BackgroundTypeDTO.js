import { z } from 'zod';
export const backgroundTypeSchema = z.object({
    description: z.string(),
    nb_tce: z.string(),
    start_date: z.coerce.date(),
    final_date: z.coerce.date().optional()
});
//# sourceMappingURL=BackgroundTypeDTO.js.map