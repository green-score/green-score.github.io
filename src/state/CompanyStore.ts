import { useLocalObservable } from 'mobx-react';
import { fetchCompanyResults, getCompany } from '../routes/company';
import { Company, CompanyPreview } from '../types/company';

export interface CompanyStore {
  companies: { [id: string]: Company },
  searchResults: CompanyPreview[],
  searchResultsOffset: number,
  searchTerm: string | null,
  noMoreResults: boolean,
  openModalCompany: Company | null,

  fetchCompanies: (term: string) => Promise<void>;
  clearResults: () => Promise<void>;
  openCompany: (id: string) => Promise<void>;
  closeCompany: () => void;
}

const useCompanyStore = () => {
  const store = useLocalObservable<CompanyStore>(() => ({
    companies: {},
    searchResults: [],
    searchResultsOffset: 0,
    searchTerm: null,
    noMoreResults: false,
    openModalCompany: null,

    fetchCompanies: async (term: string) => {
      const companies = await fetchCompanyResults(term);

      // store.searchResultsOffset = offset;

      // if (offset === -1) {
      // means we're done fetching i guess (or error?)
      // store.noMoreResults = true;
      // }

      // console.log(companies);
      store.searchResults = companies.map((c) => c.item);
    },

    clearResults: async () => {
      store.openModalCompany = null;
      store.searchResults = [];
    },

    openCompany: async (id: string) => {
      const company: Company = store.companies[id];

      if (company) {
        store.openModalCompany = company;
        return;
      }

      const fetched = await getCompany(id);

      if (fetched) {
        store.companies[id] = fetched;
      }

      store.openModalCompany = fetched;
    },

    closeCompany: () => {
      store.openModalCompany = null;
    },
  }));

  return store;
};

export default useCompanyStore;
