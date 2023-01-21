import { z } from 'zod';

const taskStatusSchema = z.enum(['Todo', 'Done']);
const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: taskStatusSchema,
  description: z.string().optional(),
  dueDate: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
  createdAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
});

export type Task = z.infer<typeof taskSchema>;
export type TaskStatus = z.infer<typeof taskStatusSchema>;

export const useFindTasksByProjectId = async (projectId: string) => {
  const url = `https://api/tasks/${projectId}`;
  return await useCustomFetch(url, ['tasks', projectId], taskSchema.array());
};
