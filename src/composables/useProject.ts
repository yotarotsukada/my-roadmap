import { z } from 'zod';
import { projectSchema, taskSchema } from '../schema';

export const useFindAllProjects = async () => {
  const url = 'projects';
  return await useCustomFetch(
    url,
    z.object({
      projects: projectSchema.array(),
    })
  );
};

export const useFindOneProject = async (id: string) => {
  const url = `projects/${id}`;
  return await useCustomFetch(
    url,
    z.object({
      project: projectSchema.merge(z.object({ tasks: taskSchema.array() })),
    })
  );
};
