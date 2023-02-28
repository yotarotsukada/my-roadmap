import { z } from 'zod';

export const taskStatusSchema = z.enum(['Todo', 'Done']);

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: taskStatusSchema,
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

export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type Task = z.infer<typeof taskSchema>;
