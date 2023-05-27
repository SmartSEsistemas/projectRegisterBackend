import {z} from  'zod';

export const organizationChartConfigSchema = z.object({
  description: z.string(),
  nb_config_organization_chart: z.string(),
  name_level_1: z.string(),
  name_level_2: z.string(),
  name_level_3: z.string().optional(),
  name_level_4: z.string().optional(),
  name_level_5: z.string().optional(),
  name_level_6: z.string().optional(),
  size_level_1: z.number(),
  size_level_2: z.number(),
  size_level_3: z.number().optional(),
  size_level_4: z.number().optional(),
  size_level_5: z.number().optional(),
  size_level_6: z.number().optional(),
  separator_level_1: z.enum([".", "-", "/"]).optional(),
  separator_level_2: z.enum([".", "-", "/"]).optional(),
  separator_level_3: z.enum([".", "-", "/"]).optional(),
  separator_level_4: z.enum([".", "-", "/"]).optional(),
  separator_level_5: z.enum([".", "-", "/"]).optional(),
  separator_level_6: z.enum([".", "-", "/"]).optional(),
  required_level_1: z.boolean(),
  required_level_2: z.boolean(),
  required_level_3: z.boolean(),
  required_level_4: z.boolean(),
  required_level_5: z.boolean(),
  required_level_6: z.boolean(),
  year: z.number(),
  start_date: z.coerce.date()
})

export type OrganizationChartConfigDTO = z.infer<typeof organizationChartConfigSchema>;