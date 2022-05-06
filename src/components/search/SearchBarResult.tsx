import React, { MouseEvent } from 'react';
import { CompanyPreview } from '../../types/company';
import CompanyRow from '../company/CompanyRow';

type Props = {
  companyPreview: CompanyPreview;
  onClick: () => void;
};

const SearchBarResult = ({ companyPreview, onClick }: Props) => {
  return (
    <button type="button" className="search-bar-result" onTouchStart={onClick} onMouseDown={onClick}>
      <CompanyRow companyPreview={companyPreview} />
    </button>
  );
};

export default SearchBarResult;
