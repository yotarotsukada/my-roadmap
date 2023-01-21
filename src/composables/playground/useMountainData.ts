import { z } from 'zod';

const mountainSchema = z.object({
  title: z.string(),
  height: z.string(),
});

export type Mountain = z.infer<typeof mountainSchema>;

export const useMountainData = async () => {
  const url = 'https://api.nuxtjs.dev/mountains';
  return await useCustomFetch(url, 'mountains', mountainSchema.array());
};
