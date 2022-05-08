/*
Requires you to define these variables:
`POSTFORM_SPREADSHEET_URL` (Spreadsheet URL of Admin Post Form).
`COMPANYFORM_SPREADSHEET_URL` (Spreadsheet URL of Company Post Form).
*/

export const PRODUCTION = process.env.NODE_ENV === 'production';

// TODO set as env vars
const POSTFORM_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1yk4RyZgIu2r8MgnvTejj0AAVNiCLRy9TQUJ1PkGcO-Q';
const COMPANY_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1ortfV5n7cWMj9fNm880cj5OcsK7ZuHO8iijlVGwpGLU';
const SCORE_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/15VrAx7m-tbype7yPWi-RuNNQoq-y2xdQgz2VDWnzRPg';
const SCORE_VERSION_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/13IZGEAb4RG9Hm3awL9T34j-QamJ3lakfzeK7hlpm6yM';
const FACTOR_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1XQDyJUODw-Tiiyy4ClxNBvF3ZVTkjSPP1LwP8TQUtNg';

// TODO Set as the new spreadsheets i created
const DEV_POSTFORM_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1I7P5FrxtElfC7ocEWc1ykxS2rzhLrG3yarBONQpHuhA';
const DEV_COMPANY_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1SU9_Ryx2BVHVYXBQYi3VxIaCron6XdHowVUhlmoXlu0';
const DEV_SCORE_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1nQOnIXbfd86MCvfbAImKOPoI-5TigWa5XjpROt2Bn3o';
const DEV_SCORE_VERSION_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1hHxj0_gIAzkvRLdpPQ-sKbztLSktkHW4be_HVSLIitU';
const DEV_FACTOR_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/16zXBppxs66gJuATbaD5KBZJJAQfoMvTRak33QMjnoVk';

export const postSpreadsheetURL =
  (PRODUCTION ? POSTFORM_SPREADSHEET_URL : DEV_POSTFORM_SPREADSHEET_URL);
export const companySpreadsheetURL =
  (PRODUCTION ? COMPANY_SPREADSHEET_URL : DEV_COMPANY_SPREADSHEET_URL);
export const scoreVersionSpreadsheetURL =
  (PRODUCTION ? SCORE_VERSION_SPREADSHEET_URL : DEV_SCORE_VERSION_SPREADSHEET_URL);
export const factorSpreadsheetURL =
  (PRODUCTION ? FACTOR_SPREADSHEET_URL : DEV_FACTOR_SPREADSHEET_URL);
export const scoreSpreadsheetURL =
  (PRODUCTION ? SCORE_SPREADSHEET_URL : DEV_SCORE_SPREADSHEET_URL);

if (!postSpreadsheetURL || !companySpreadsheetURL || !scoreSpreadsheetURL ||
  !scoreVersionSpreadsheetURL || !factorSpreadsheetURL) {
  // eslint-disable-next-line no-console
  console.error('ENV VARIABLES MISSING FROM PROCESS!!!');
}
