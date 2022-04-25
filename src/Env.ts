/*
Requires you to define these variables:
`POSTFORM_SPREADSHEET_ID` (Spreadsheet ID of Admin Post Form).
`POSTFORM_SHEET_ID` (Sheet ID of the specific Admin Post Form page).
`POSTFORM_GOOGLE_CLIENT_EMAIL` (email of the client).
`POSTFORM_GOOGLE_SERVICE_PRIVATE_KEY` (private key of the Google).
*/

export const production = process.env.NODE_ENV === 'production';
export const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1yk4RyZgIu2r8MgnvTejj0AAVNiCLRy9TQUJ1PkGcO-Q';
export const SPREADSHEET_ID = process.env.POSTFORM_SPREADSHEET_ID;
export const SHEET_ID = process.env.POSTFORM_SHEET_ID;
export const CLIENT_EMAIL = process.env.POSTFORM_GOOGLE_CLIENT_EMAIL;
export const PRIVATE_KEY = process.env.POSTFORM_GOOGLE_SERVICE_PRIVATE_KEY?.replace(/\n/g, '\n');

if (!SPREADSHEET_ID || !SHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
  console.error('ENV VARIABLES MISSING FROM PROCESS!!!');
}
