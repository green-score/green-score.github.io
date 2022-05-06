import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { debounce } from 'lodash';
import { observer } from 'mobx-react';

import useCompanyStore from '../../state/CompanyStore';
import SearchBarResult from './SearchBarResult';
import CompanyView from '../company/CompanyView';
import Modal from '../common/Modal';

const SEARCH_DEBOUNCE_TIME = 800;

const SearchBar = observer(() => {
  const store = useCompanyStore();
  const [inputSelected, setInputSelected] = useState(false);
  const [closeable, setCloseable] = useState(false);

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

  const onClick = (id: string) => {
    console.log('click result');
    setCloseable(false);
    // e.preventDefault();
    store.openCompany(id).then(() => {
      console.log('SUCCESSFULLY OPENED COMPANY');
      console.log(store.openModalCompany);
    }).catch((error) => {
      console.error('error in opening company...');
      console.error(error);
    });
  };

  const showResults = store.searchResults.length !== 0 && inputSelected;

  return (
    <div
      className="search-container"
      role="search"
    >
      <div className="search-bar">
        <input
          className={`search-bar-input ${showResults ? 'results-showing' : ''}`}
          type="text"
          name="searchInput"
          placeholder="Search"
          onChange={debounce(onChange, SEARCH_DEBOUNCE_TIME)}
          onSelect={() => {
            setInputSelected(true);
            console.log('select');
          }}
          onBlur={() => {
            setInputSelected(false);
            console.log('blur');
          }}
          // onBlur={() => alert('blur')}
          // onSelect={() => alert('select')}
          // onSubmit={(e) => onChange(e)}
        />
        {showResults && (
          <button
            type="button"
            className="search-clear-button btn-close"
            aria-label="Search Clear"
            onClick={() => alert('TODO')}
          />
        )}
        <i className="bi bi-search search-bar-icon" />
      </div>
      <div className={`search-bar-results ${showResults ? 'showing' : ''}`}>
        {store.searchResults.map((c) => (
          <SearchBarResult companyPreview={c} onClick={() => onClick(c.id)} />
        ))}
      </div>
      <Modal
        className="company-modal"
        show={store.openModalCompany !== null}
        onHide={() => {
          // setInputSelected(false);
          closeable && store.closeCompany();
          setCloseable(true);
          console.log('modal hide');
        }}
      >
        <CompanyView company={store.openModalCompany!} />
      </Modal>
    </div>
  );
});

export default SearchBar;
