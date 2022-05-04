import Papa from 'papaparse';
import { PRODUCTION } from '../Env';
import { parsedIsAfter } from '../util/time';

interface SpreadsheetType {
  production: string;
  live: string;
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
  scoreValueID: string;
  description: string;
  factorID: string;
}

export interface SpreadsheetScoreValue extends SpreadsheetType {
  value: string;
}

export interface SpreadsheetFactor extends SpreadsheetType {
  name: string;
  description: string;
  subfactorIDs: string;
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
  (row.production.toLowerCase() === 'yes') === PRODUCTION && parsedIsAfter(row.live)
);

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
  convert: (row: T, i: number) => U,
  shouldParse?: (row: T, i: number) => boolean,
): Promise<U[]> => new Promise((resolve, reject) => {
  Papa.parse<T>(`${spreadsheetURL}/export?format=csv`, {
    download: true,
    header: true,
    complete: (results) => {
      resolve(results.data.flatMap((s, i) => {
        if (shouldParseRow(s) && shouldParse && shouldParse(s, i)) {
          return convert(s, i);
        }
        return [];
      }));
    },
    error(error: Error) {
      // eslint-disable-next-line no-console
      console.error(error);
      reject(error);
    },
  });
});

export default loadRows;
