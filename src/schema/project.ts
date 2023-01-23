import { z } from 'zod';

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  goal: z.string(),
  description: z.string().optional(),
  dueDate: z
    .string()
    .datetime({ offset: true })
    .transform((str) => new Date(str)),
  createdAt: z
    .string()
    .datetime({ offset: true })
    .transform((str) => new Date(str)),
});

export type Project = z.infer<typeof projectSchema>;
