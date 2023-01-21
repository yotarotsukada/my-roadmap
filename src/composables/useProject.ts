import { z } from 'zod';

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  goal: z.string(),
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

export type Project = z.infer<typeof projectSchema>;

export const useFindAllProjects = async () => {
  const url = 'https://api/projects';
  return await useCustomFetch(url, 'projects', projectSchema.array());
};

export const useFindOneProject = async (id: string) => {
  const url = `https://api/projects/${id}`;
  return await useCustomFetch(url, ['projects', id], projectSchema);
};
