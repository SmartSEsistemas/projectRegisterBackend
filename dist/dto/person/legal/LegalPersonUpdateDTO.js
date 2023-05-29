import { z } from 'zod';
import { reasonSchema } from "../../reason/ReasonDTO.js";
import { legalPersonSchema } from "./LegalPersonDTO.js";
export const legalPersonUpdadeSchema = z.object({
    person: legalPersonSchema,
    reason: reasonSchema
});
//# sourceMappingURL=LegalPersonUpdateDTO.js.map