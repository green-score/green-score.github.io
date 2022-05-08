import React from 'react';
import { Company } from '../../types/company';
import LoadingIndicator from '../common/LoadingIndicator';
import ClickableScoreIcon from '../score/ClickableScoreIcon';

type Props = {
  company: Company;
  loading: boolean;
};

const CompanyView = ({ company, loading }: Props) => {
  return (
    <div className="company-view">
      <ClickableScoreIcon scorePreview={company.scoreVersion} factorID={company.factorID} />
      <div className="d-flex flex-column">
        <h1> { company.name } </h1>
        <p> { company.description }</p>
      </div>
      { loading && <LoadingIndicator />}
    </div>
  );
};

export default CompanyView;
