// import { Company, CompanyPreview } from '../types/company';
// import Papa from 'papaparse';
// import { PRODUCTION, COMPANYFORM_SPREADSHEET_URL } from '../Env';
// import { Score } from '../types/score';
//
// // In the real version, these won't be stored on the front-end.
// const COMPANIES: Company[] = [];
// const SCORES: { [id: number]: Score } = {};
//
// type SpreadSheetCompany = {
//   Timestamp: string;
// };
//
// const spreadsheetItemToCompany = ({
//   Timestamp,
// }: SpreadSheetCompany, i: number): Company => {
//   return {
//     id: `${i}`,
//     name: '',
//     sectors: [],
//     description: '',
//     scoreID: [],
//
//     score
//     title,
//     category,
//     author,
//     thumbnailSrc: thumbnail.replace('open', 'uc'),
//     live: new Date(live),
//     description,
//     production: production === 'yes',
//     url,
//     headings: [
//       heading1,
//       heading2,
//       heading3,
//     ],
//     sections: [
//       body1,
//       body2,
//       body3,
//     ],
//   };
// };
//
// const fetchAllCompanies = async () => new Promise<>((resolve, reject) => (
//   Papa.parse<SpreadSheetCompany>(`${COMPANYFORM_SPREADSHEET_URL}/export?format=csv`, {
//     download: true,
//     header: true,
//     complete: (results) => {
//       resolve(results.data.flatMap((s, i) => {
//         const p = spreadsheetItemToCompany(s, i);
//         return p.production !== PRODUCTION ? [] : p;
//       }));
//     },
//     error(error: Error) {
//       console.error(error);
//       reject(error);
//     },
//   });
// ));
//
// const fetchCompanyResults = async (term: string) => {
//
// };
//
// export const getCompany = async (id: string) => {
//
// };
//
// export const getScore = async (id: string) => {
//
// };
//
//
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
