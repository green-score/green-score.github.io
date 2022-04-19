import { LOG, ERR } from './Constants';

export const log = (...args: any[]) => (
  // eslint-disable-next-line no-console
  LOG && console.log(args)
);

export const err = (...args: any[]) => (
  // eslint-disable-next-line no-console
  ERR && console.error(args)
);
