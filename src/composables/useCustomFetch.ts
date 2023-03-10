import { z } from 'zod';

export const useCustomFetch = <T>(
  path: string,
  schema: z.ZodType<T, z.ZodTypeDef, any>,
  options?: {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: Record<string, any>;
  },
  keys: string | string[] = [options?.method ?? 'GET', path]
) => {
  const { NODE_ENV, MSW, HASURA_SECRET } = useRuntimeConfig();
  const fetcher = () =>
    $fetch(path, {
      baseURL:
        NODE_ENV !== 'development' || MSW === 'false'
          ? 'https://corgi-todo.hasura.app/api/rest/'
          : undefined,
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': HASURA_SECRET,
      },
      ...options,
    });
  const key = [...keys].join();
  const transform = (data: any) => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      console.error(parsed.error.format());
      throw new Error('Zod parse error');
    }
    return parsed.data;
  };

  return useLazyAsyncData(key, fetcher, { transform });
};
