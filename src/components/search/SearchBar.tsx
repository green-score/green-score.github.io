import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { debounce } from 'lodash';
import { observer } from 'mobx-react';
import { Modal } from 'react-bootstrap';

import useCompanyStore from '../../state/CompanyStore';
import SearchBarResult from './SearchBarResult';
import CompanyView from '../company/CompanyView';

const SEARCH_DEBOUNCE_TIME = 800;

const SearchBar = observer(() => {
  const store = useCompanyStore();
  const [inputSelected, setInputSelected] = useState(false);

  const inputChange = (value: string) => {
    if (value === '') {
      store.clearResults().then(() => {
        console.log('SUCCESSFULLY CLEARED SEARCH RESULTS');
      }).catch((error) => {
        console.error('error in clearing search results...');
        console.error(error);
      });
    } else {
      store.fetchCompanies(value).then(() => {
        console.log('SUCCESSFULLY LOADED SEARCH RESULTS');
        // store.searchResults.forEach((c) => {
        //   console.log(c.name);
        // });
      }).catch((error) => {
        console.error('error in fetching search results...');
        console.error(error);
      });
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => inputChange(e.target.value);
  // TODO const onSubmit = (e: FormEvent<HTMLInputElement>) => inputChange(e.target.searchInput.value);

  const onClick = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    store.openCompany(id).then(() => {
      console.log('SUCCESSFULLY OPENED COMPANY');
      console.log(store.openModalCompany);
    }).catch((error) => {
      console.error('error in opening company...');
      console.error(error);
    });
  };

  const showResults = store.searchResults.length !== 0;

  return (
    <div
      className="search-container"
      role="search"
      // onBlur={() => setInputSelected(false)}
    >
      <div className="search-bar">
        <input
          className={`search-bar-input ${showResults ? 'results-showing' : ''}`}
          type="text"
          name="searchInput"
          placeholder="Search"
          onChange={debounce(onChange, SEARCH_DEBOUNCE_TIME)}
          // onSelect={() => setInputSelected(true)}
          // onSubmit={(e) => onChange(e)}
        />
        <i className="bi bi-search search-bar-icon" />
      </div>
      {showResults && (
        <div className="search-bar-results">
          {store.searchResults.map((c) => (
            <SearchBarResult companyPreview={c} onClick={(e) => onClick(e, c.id)} />
          ))}
        </div>
      )}
      <Modal
        className="company-modal"
        show={store.openModalCompany !== null}
        onHide={store.closeCompany}
      >
        {store.openModalCompany && (
          <CompanyView company={store.openModalCompany} />
        )}
      </Modal>
    </div>
  );
});

export default SearchBar;
