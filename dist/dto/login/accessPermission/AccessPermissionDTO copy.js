import { z } from 'zod';
import { naturalPersonUpdadeSchema } from '../../person/natural/NaturalPersonUpdateDTO';
import { legalNatureSchema } from '../../entity/legalNature/LegalNatureDTO';
export const accessPermissionSchema = z.object({
    person_data: z.union([naturalPersonUpdadeSchema, legalNatureSchema]),
    password: z.string(),
    reason: z.string()
});
//# sourceMappingURL=AccessPermissionDTO%20copy.js.map