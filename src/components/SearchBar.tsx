import React, { ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { observer } from 'mobx-react';
import CompanyCard from './company/CompanyCard';
import useCompanyStore from '../state/CompanyStore';

const SEARCH_DEBOUNCE_TIME = 800;

const SearchBar = observer(() => {
  const store = useCompanyStore();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    store.fetchCompanies(e.target.value).then(() => {
      console.log('SUCCESSFULLY LOADED SEARCH RESULTS');
    }).catch((error) => {
      console.error('error in fetching search results...');
      console.error(error);
    });
  };
  const inputClassName = store.searchResults.length !== 0 ? 'results-showing' : '';

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className={`search-bar-input ${inputClassName}`}
          type="text"
          placeholder="Search"
          onChange={debounce(onChange, SEARCH_DEBOUNCE_TIME)}
        />
        <i className="bi bi-search search-bar-icon" />
      </div>
      {store.searchResults.length !== 0 && (
        <div className="search-bar-results">
          {store.searchResults.map((c) => (
            <CompanyCard companyPreview={c} />
          ))}
        </div>
      )}
    </div>
  );
});

export default SearchBar;
