import React, { MouseEvent } from 'react';
import { CompanyPreview } from '../../types/company';
import CompanyRow from '../company/CompanyRow';

type Props = {
  companyPreview: CompanyPreview;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const SearchBarResult = ({ companyPreview, onClick }: Props) => {
  return (
    <button className="search-bar-result" type="button" onClick={onClick}>
      <CompanyRow companyPreview={companyPreview} />
    </button>
  );
};

export default SearchBarResult;
