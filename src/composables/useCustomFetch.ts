import { z } from 'zod';

/**
 * データフェッチを行うカスタムメソッド
 * @param path データフェッチ先のパス
 * @param keys キャッシュ管理の識別子
 * @param schema バリデーションスキーマ
 * @returns https://nuxt.com/docs/api/composables/use-async-data
 */
export const useCustomFetch = <T>(
  path: string,
  keys: string | string[],
  schema?: z.ZodType<T, z.ZodTypeDef, any>
) => {
  const fetcher = () => fetch(path).then((res) => res.json());
  const key = [...keys].join();
  const transform = schema
    ? (data: any) => {
        const parsed = schema.safeParse(data);
        if (!parsed.success) {
          console.error(parsed.error.format());
          throw new Error('Zod parse error');
        }
        return parsed.data;
      }
    : undefined;

  return useLazyAsyncData(key, fetcher, { transform });
};
