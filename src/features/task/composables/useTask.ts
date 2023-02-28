import { z } from 'zod';
import { TaskStatus } from '../schema';

export const useModifyTaskStatus = async (id: string, status: TaskStatus) => {
  const url = `tasks/${id}`;
  return await useCustomFetch(
    url,
    z.object({
      success: z.object({ id: z.string() }),
    }),
    {
      method: 'PATCH',
      body: { status },
    }
  );
};

// TODO refreshが不要なスキーマに変更する
export const useRegisterTask = async (
  description: string,
  dueDate: string,
  title: string,
  projectId: string
) => {
  const url = 'tasks';
  return await useCustomFetch(
    url,
    z.object({
      success: z.object({ id: z.string() }),
    }),
    {
      method: 'POST',
      body: {
        description,
        dueDate,
        title,
        projectId,
      },
    }
  );
};
