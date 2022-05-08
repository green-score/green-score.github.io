import React from 'react';
import { CompanyPreview } from '../../types/company';
import ClickableScoreIcon from '../score/ClickableScoreIcon';

type Props = {
  companyPreview: CompanyPreview;
};
/*

Want to show SCORE

 */

const CompanyRow = ({ companyPreview }: Props) => {
  return (
    <div className="company-row">
      <ClickableScoreIcon
        scorePreview={companyPreview.scoreVersion}
        factorID={companyPreview.factorID}
        dimension="4rem"
      />
      <h1 style={{ marginLeft: '1rem' }}> { companyPreview.name } </h1>
    </div>
  );
};

export default CompanyRow;
