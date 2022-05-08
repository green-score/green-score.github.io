import { action, runInAction } from 'mobx';
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

  fetchCompaniesIsLoading: boolean;
  openCompanyIsLoading: boolean;

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

    fetchCompaniesIsLoading: false,
    openCompanyIsLoading: false,

    fetchCompanies: action(async (term: string) => {
      console.log('starting fetch');
      store.fetchCompaniesIsLoading = true;

      const companies = await fetchCompanyResults(term);

      runInAction(() => {
        store.searchResults = companies.map((c) => c.item);

        store.fetchCompaniesIsLoading = false;
      });

      // store.searchResultsOffset = offset;

      // if (offset === -1) {
      // means we're done fetching i guess (or error?)
      // store.noMoreResults = true;
      // }

      // console.log(companies);
      // store.searchResults = companies.map((c) => c.item);
    }),

    clearResults: action(async () => {
      store.openModalCompany = null;
      store.searchResults = [];
    }),

    openCompany: action(async (id: string) => {
      const company: Company = store.companies[id];

      if (company) {
        store.openModalCompany = company;
        return;
      }

      store.openCompanyIsLoading = true;

      const fetched = await getCompany(id);

      runInAction(() => {
        if (fetched) {
          store.companies[id] = fetched;
        }

        store.openModalCompany = fetched;

        store.openCompanyIsLoading = false;
      });
    }),

    closeCompany: action(() => {
      store.openModalCompany = null;
    }),
  }));

  return store;
};

export default useCompanyStore;
