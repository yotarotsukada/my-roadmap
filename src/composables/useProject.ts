import { z } from 'zod';
import { Project, projectSchema, taskSchema } from '../schema';

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

export const useModifyProject = async (id: string, project: Project) => {
  const url = `projects/${id}`;
  return await useCustomFetch(
    url,
    z.object({
      project: projectSchema.merge(z.object({ tasks: taskSchema.array() })),
    }),
    {
      method: 'POST',
      body: {
        goal: project.goal,
        description: project.description,
        dueDate: new Date(project.dueDate),
        title: project.title,
      },
    }
  );
};
