import Papa from 'papaparse';
import { parsedIsAfter } from '../util/time';
import { TEST_DATA } from '../Constants';
import getOfflineData from './offline';

export interface SpreadsheetType {
  live?: string; // if not in row, always live
}

export interface SpreadSheetPost extends SpreadsheetType {
  Timestamp: string;
  category: string;
  author: string;
  title: string;
  description: string;
  thumbnail: string;
  heading1: string;
  body1: string;
  heading2: string;
  body2: string;
  heading3: string;
  body3: string;
  url: string;
}

export interface SpreadsheetCompany extends SpreadsheetType {
  name: string;
  sectors: string;
  scoreVersionID: string;
  description: string;
  factorID: string;
}

export interface SpreadsheetScoreValue extends SpreadsheetType {
  value: string;
}

export interface SpreadsheetFactor extends SpreadsheetType {
  name: string;
  description: string;
  subfactorIDs?: string;
}

export interface SpreadsheetScore extends SpreadsheetType {
  key: string;
  value: string;
  description: string;
}

/**
 * Whether we should parse the row into the object once it comes out
 * of the
 * @param row
 */
const shouldParseRow = (row: SpreadsheetType) => (
  (row.live === undefined || parsedIsAfter(row.live))
);

const downloadSpreadsheet = async <T>(
  url: string,
  complete: (results: T[]) => void,
  fail: (error: Error) => void,
) => {
  if (TEST_DATA) {
    const data = getOfflineData<T>(url);
    data ? complete(data) : fail(new Error('FML'));
  } else {
    Papa.parse<T>(`${url}/export?format=csv`, {
      download: true,
      header: true,
      complete: async (results) => {
        // eslint-disable-next-line no-console
        console.log(`Fetched ${results.data.length} spreadsheet rows!`);
        complete(results.data);
      },
      error(error: Error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch spreadsheet rows!');
        // eslint-disable-next-line no-console
        console.error(error);
        fail(error);
      },
    });
  }
};

/**
 * Loads the rows. First generic type T is the type of the row in
 * the Spreadsheet. Second generic type U is the type of the object
 * to return.
 *
 * @param spreadsheetURL The string URL for the public Google Spreadsheet.
 * @param convert The function to convert the raw spreadsheet type to the model.
 * @param shouldParse Optional function to determine whether the row should be parsed.
 */
const loadRows = async <T extends SpreadsheetType, U>(
  spreadsheetURL: string,
  convert: (row: T, i: number) => Promise<U>,
  shouldParse?: (row: T, i: number) => boolean,
): Promise<U[]> => new Promise((resolve, reject) => {
  // console.log('Fetching rows!');
  downloadSpreadsheet<T>(spreadsheetURL, async (results) => {
    // console.log('GOT THE ROWS');
    // console.log(results.length);
    const rows = [];
    for (let i = 0; i < results.length; i++) {
      const s = results[i];
      // console.log(`Result ${i}`);
      // console.log(`shouldParseRow: ${shouldParseRow(s)}`);
      // console.log(`shouldParse: ${!shouldParse || shouldParse(s, i)}`);
      if (shouldParseRow(s) && (!shouldParse || shouldParse(s, i))) {
        // eslint-disable-next-line no-await-in-loop
        rows.push(await convert(s, i));
      }
    }
    // console.log('Returning rows!');
    // console.log(rows.length);
    resolve(rows);
  }, reject);
});

export const strToList = (s: string): string[] => s.split(/[ ,]+/);

export default loadRows;
