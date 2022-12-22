type Mountain = {
  name: string;
  height: string;
};

const convert = (data: any[]): Mountain[] => {
  return data.map((item) => ({
    name: item.title,
    height: item.height,
  }));
};

export const useMountainData = async () => {
  const url = 'https://api.nuxtjs.dev/mountains';
  return await useCustomFetch(url, convert);
};
