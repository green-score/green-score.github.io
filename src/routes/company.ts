import Fuse from 'fuse.js';
import {
  Company,
  CompanySector,
  stringToCompanySector,
} from '../types/company';
import loadRows, { SpreadsheetCompany, strToList } from './spreadsheet';
import { COMPANY_SPREADSHEET_URL } from '../Env';
import { getScoreVersion } from './score';

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: [
    'name',
    'sectors',
  ],
};

let fuse: Fuse<Company> | undefined;
const COMPANIES: { [id: string]: Company } = {};

const convertSectorList = (s: string[]): CompanySector[] => s.map(stringToCompanySector);
const convertCompany = async (s: SpreadsheetCompany, i: number): Promise<Company> => ({
  id: `${i}`,
  name: s.name,
  description: s.description,
  // TODO tags: strToList(s.tags),
  sectors: convertSectorList(strToList(s.sectors)),
  scoreVersion: await getScoreVersion(s.scoreVersionID),
});

const fetchAllCompanies = async () => {
  const companies = await loadRows(COMPANY_SPREADSHEET_URL, convertCompany);
  for (let i = 0; i < companies.length; i++) {
    COMPANIES[companies[i].id] = companies[i];
  }
  return new Fuse(companies, fuseOptions);
};

export const fetchCompanyResults = async (term: string): Promise<Fuse.FuseResult<Company>[]> => {
  if (fuse === undefined) {
    fuse = await fetchAllCompanies();
  }

  return fuse.search(term);
};

export const getCompany = async (id: string): Promise<Company> => {
  if (fuse === undefined) {
    fuse = await fetchAllCompanies();
  }

  return COMPANIES[id];
};

// export const fetchNextCompanies = async (term: string, offset: number): Promise<CompanyFetchResult> => {
//   if (offset === -1) {
//     // offset -1 should just return nothing
//     return { companies: [], offset };
//   }
//   // if we're done with the list, return -1 for offset.
//   const companyResults = await fetchCompanyResults(term);
//   return {
//     posts: posts.slice(offset, offset + NUM_FETCH),
//     offset: ((offset + NUM_FETCH) >= posts.length) ? -1 : offset + NUM_FETCH,
//   };
// };

export {};
