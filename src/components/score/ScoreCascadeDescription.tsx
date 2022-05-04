import React from 'react';
import { ScoreCascade } from '../../types/score';
import { getScoreGrade } from '../../util/score';

type Props = {
  scoreCascade: ScoreCascade;
};

const ScoreCascadeDescription = ({ scoreCascade: score }: Props) => {
  return (
    <div>
      <h2>Factor: {score.name}</h2>
      <p>{score.factorDescription}</p>
      <br />
      <h2> Score: {getScoreGrade(score.value)} ({score.value}) </h2>
      <p>{score.scoreDescription}</p>
    </div>
  );
};

export default ScoreCascadeDescription;
