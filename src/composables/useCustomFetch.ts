export const useCustomFetch = (
  path: string,
  transform?: (prev: any) => any,
  keys?: string[]
) => {
  const fetcher = () => fetch(path).then((res) => res.json());
  return useLazyAsyncData('', fetcher, { transform, pick: keys });
};
