import { z } from 'zod';
import { organizationChartRespSchema } from "./OrganizationChartRestDTO.js";
import { reasonSchema } from '../../reason/ReasonDTO.js';
const reason = reasonSchema.omit({ person_id: true, reason: true });
export const organizationChartRespUpdateSchema = z.object({
    organization_chart_resp: organizationChartRespSchema,
    reason: reason.extend({ register_resp_organization_chart_id: z.number(), reason: z.enum(["INATIVACAO"]) })
});
//# sourceMappingURL=OrganizationChartRespUpdateDTO.js.map