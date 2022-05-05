import React from 'react';
import { Company } from '../../types/company';
import ScoreIcon from '../score/ScoreIcon';

type Props = {
  company: Company;
};

const CompanyView = ({ company }: Props) => {
  return (
    <div className="company-view">
      <ScoreIcon scorePreview={company.scoreVersion} factorID={company.factorID} />
      <h1> { company.name } </h1>
    </div>
  );
};

export default CompanyView;
