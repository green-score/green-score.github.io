import React from 'react';
import { ScoreVersion } from '../../types/score';

type Props = {
  scorePreview: ScoreVersion;
};

const ScoreIcon = ({ scorePreview }: Props) => {
  return (
    <button type="button" className={`score-icon ${scorePreview.value.toLowerCase()}`}>
      <h1> { scorePreview.value.toUpperCase() } </h1>
    </button>
  );
};

export default ScoreIcon;
