import React from 'react';
import { CompanyPreview } from '../../types/company';

type Props = {
  companyPreview: CompanyPreview;
};

const CompanyCard = ({ companyPreview }: Props) => {
  return (
    <div className="search-bar-result company-card">
      { companyPreview.name }
    </div>
  );
};

export default CompanyCard;
