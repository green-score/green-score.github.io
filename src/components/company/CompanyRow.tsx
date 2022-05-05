import React from 'react';
import { CompanyPreview } from '../../types/company';
import ScoreIcon from '../score/ScoreIcon';

type Props = {
  companyPreview: CompanyPreview;
};
/*

Want to show SCORE

 */

const CompanyRow = ({ companyPreview }: Props) => {
  return (
    <div className="company-row">
      <ScoreIcon scorePreview={companyPreview.scoreVersion} factorID={companyPreview.factorID} />
      <h1> { companyPreview.name } </h1>
    </div>
  );
};

export default CompanyRow;
