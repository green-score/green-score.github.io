import React from 'react';
import { CompanyPreview } from '../../types/company';

type Props = {
  companyPreview: CompanyPreview;
};

const CompanyCard = ({ companyPreview }: Props) => {
  return (
    <div className="company-card">
      <h1> { companyPreview.name } </h1>
    </div>
  );
};

export default CompanyCard;
