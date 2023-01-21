export const formatDate = (base: Date, delimiter = '/') => {
  return [base.getFullYear(), base.getMonth() + 1, base.getDate()]
    .map((num) => `${num}`.padStart(2, '0'))
    .join(delimiter);
};
