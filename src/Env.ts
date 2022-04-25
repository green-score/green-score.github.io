/*
Requires you to define these variables:
`POSTFORM_SPREADSHEET_URL` (Spreadsheet URL of Admin Post Form).
`COMPANYFORM_SPREADSHEET_URL` (Spreadsheet URL of Company Post Form).
*/

export const PRODUCTION = process.env.NODE_ENV === 'production';
// TODO set as env vars
export const POSTFORM_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1yk4RyZgIu2r8MgnvTejj0AAVNiCLRy9TQUJ1PkGcO-Q';
export const COMPANYFORM_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1yk4RyZgIu2r8MgnvTejj0AAVNiCLRy9TQUJ1PkGcO-Q';

if (!POSTFORM_SPREADSHEET_URL || !COMPANYFORM_SPREADSHEET_URL) {
  console.error('ENV VARIABLES MISSING FROM PROCESS!!!');
}
