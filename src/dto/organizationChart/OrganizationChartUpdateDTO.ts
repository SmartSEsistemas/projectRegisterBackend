import {z} from  'zod';
import { reasonSchema } from "../reason/ReasonDTO.js";
import { organizationChartSchema } from "./OrganizationChartDTO.js";

const reason = reasonSchema.omit({person_id: true});

export const organizationChartUpdateSchema = z.object({
  organization_chart: organizationChartSchema,
  reason: reason.extend({register_organization_chart_id: z.number()})
})

export type OrganizationChartUpdateDTO = z.infer<typeof organizationChartUpdateSchema>;