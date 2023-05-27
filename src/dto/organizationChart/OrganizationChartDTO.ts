import {z} from 'zod';

export const organizationChartSchema = z.object({
  register_organization_chart_config_id: z.number(),
  description: z.string(),
  nb_organogram: z.string(),
  register_admin_type_id: z.number(),
  year: z.number(),
  start_date: z.coerce.date(),
  subunit: z.boolean(),
  isBackground: z.boolean(),
  register_background_type_id: z.number(),
  register_entity_id: z.number(),
})

export type OrganizationChartDTO = z.infer<typeof organizationChartSchema>;