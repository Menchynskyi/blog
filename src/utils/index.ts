export const cutString = (str: string): string => {
  return str.length > 250 ? `${str.slice(0, 250)}...` : str;
};
