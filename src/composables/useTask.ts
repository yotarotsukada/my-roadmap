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
