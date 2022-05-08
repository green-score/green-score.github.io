import { PRODUCTION } from './Env';

const TEST_DATA = false && !PRODUCTION;
const DEBUG = true && !PRODUCTION;
const LOG = true && !PRODUCTION;
const ERR = true && !PRODUCTION;
const WARN_FOR_DEVELOPMENT = false;
const PRELOAD_SPREADSHEETS = false;

export {
  DEBUG,
  ERR,
  LOG,
  TEST_DATA,
  WARN_FOR_DEVELOPMENT,
};
