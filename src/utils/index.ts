export const cutString = (str: string): string => {
  if (!str) return '';
  return str.length > 250 ? `${str.slice(0, 250)}...` : str;
};
