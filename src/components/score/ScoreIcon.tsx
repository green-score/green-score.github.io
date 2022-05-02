import React from 'react';
import { ScorePreview } from '../../types/score';
import { getScoreGrade } from '../../util/score';

type Props = {
  scorePreview: ScorePreview;
};

const ScoreIcon = ({ scorePreview }: Props) => {
  const grade: string = getScoreGrade(scorePreview.value);

  return (
    <button type="button" className={`score-icon ${grade}`}>
      <h1> { grade.toUpperCase() } </h1>
    </button>
  );
};

export default ScoreIcon;
