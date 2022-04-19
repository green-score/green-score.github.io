const now = (): Date => new Date();
const isAfter = (date: Date): boolean => date > now();

export {
  isAfter,
  now,
};
