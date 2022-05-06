import React from 'react';
import { ScoreCascade } from '../../types/score';
import { getScoreGrade } from '../../util/score';

type Props = {
  scoreCascade: ScoreCascade;
  setSelectedScoreCascade: (c: ScoreCascade) => void;
};

const ScoreCascadeView = ({ scoreCascade, setSelectedScoreCascade }: Props) => {
  return (
    <div className="score-cascade">
      <button
        type="button"
        className="score-cascade-view"
        onClick={() => setSelectedScoreCascade(scoreCascade)}
      >
        <h1>{getScoreGrade(scoreCascade.value)}</h1>
        {/* {' '} */}
        {/* ({scoreCascade.value}) */}
        {' '}
        <p>{ scoreCascade.name }</p>
      </button>
      {scoreCascade.subscores.map((subCascade) => (
        <div key={subCascade.name} className="sub-score-cascade">
          <ScoreCascadeView
            scoreCascade={subCascade}
            setSelectedScoreCascade={setSelectedScoreCascade}
          />
        </div>
      ))}
    </div>
  );
};

export default ScoreCascadeView;
