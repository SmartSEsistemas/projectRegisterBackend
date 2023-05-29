import { z } from 'zod';
import { reasonSchema } from "../../reason/ReasonDTO.js";
import { respEntitySchema } from "./RespEntityDTO.js";
const reasonOriginal = reasonSchema.omit({ reason: true, person_id: true });
const reason = reasonOriginal.extend({
    reason: z.enum(["INATIVACAO"]),
    register_resp_entity_id: z.number()
});
export const respEntityUpdadeSchema = z.object({
    resp_entity: respEntitySchema,
    reason: reason
});
//# sourceMappingURL=RespEntityUpdateDTO.js.map