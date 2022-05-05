/*
Requires you to define these variables:
`POSTFORM_SPREADSHEET_URL` (Spreadsheet URL of Admin Post Form).
`COMPANYFORM_SPREADSHEET_URL` (Spreadsheet URL of Company Post Form).
*/

export const PRODUCTION = process.env.NODE_ENV === 'production';
// TODO set as env vars
export const POSTFORM_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1yk4RyZgIu2r8MgnvTejj0AAVNiCLRy9TQUJ1PkGcO-Q';
export const COMPANY_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1ortfV5n7cWMj9fNm880cj5OcsK7ZuHO8iijlVGwpGLU';
export const SCORE_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/15VrAx7m-tbype7yPWi-RuNNQoq-y2xdQgz2VDWnzRPg';
export const SCORE_VERSION_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/13IZGEAb4RG9Hm3awL9T34j-QamJ3lakfzeK7hlpm6yM';
export const FACTOR_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1XQDyJUODw-Tiiyy4ClxNBvF3ZVTkjSPP1LwP8TQUtNg';

if (!POSTFORM_SPREADSHEET_URL || !COMPANY_SPREADSHEET_URL || !SCORE_SPREADSHEET_URL ||
  !SCORE_VERSION_SPREADSHEET_URL || !FACTOR_SPREADSHEET_URL) {
  console.error('ENV VARIABLES MISSING FROM PROCESS!!!');
}
