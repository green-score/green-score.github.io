import React from 'react';
import { ScoreCascade } from '../../types/score';
import { getScoreGrade } from '../../util/score';

type Props = {
  scoreCascade: ScoreCascade;
  setSelectedScoreCascade: (c: ScoreCascade) => void;
};

const SubscoreCascadeView = ({ scoreCascade, setSelectedScoreCascade }: Props) => {
  return (
    <div className="sub-score-cascade">
      <button
        type="button"
        className="sub-score-cascade-view"
        onClick={() => setSelectedScoreCascade(scoreCascade)}
      >
        <div> value={scoreCascade.value} </div>
        { scoreCascade.name }
      </button>
      {scoreCascade.subscores.map((subCascade) => (
        <SubscoreCascadeView
          scoreCascade={subCascade}
          setSelectedScoreCascade={setSelectedScoreCascade}
        />
      ))}
    </div>
  );
};

const ScoreCascadeView = ({ scoreCascade, setSelectedScoreCascade }: Props) => {
  return (
    <div className="score-cascade">
      <button
        type="button"
        className="main-score-cascade-view"
        onClick={() => setSelectedScoreCascade(scoreCascade)}
      >
        <p>{ scoreCascade.name }</p>
        <div>{ getScoreGrade(scoreCascade.value) }</div>
      </button>
      <SubscoreCascadeView
        scoreCascade={scoreCascade}
        setSelectedScoreCascade={setSelectedScoreCascade}
      />
    </div>
  );
};

export default ScoreCascadeView;
