import React from 'react';
import { Company } from '../../types/company';

type Props = {
  company: Company;
};

const CompanyView = ({ company }: Props) => {
  return (
    <div className="company-view">
      <h1> { company.name } </h1>
    </div>
  );
};

export default CompanyView;
