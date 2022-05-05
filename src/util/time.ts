const now = (): Date => new Date();
const isAfter = (date: Date): boolean => date < now();
const parseDate = (date: string): Date => new Date(date);
const parsedIsAfter = (date: string): boolean => isAfter(parseDate(date));

export {
  isAfter,
  now,
  parsedIsAfter,
};
