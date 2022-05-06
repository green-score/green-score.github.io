import React, { useState } from 'react';
import { ScoreCascade } from '../../types/score';
import { getScoreGrade } from '../../util/score';

type Props = {
  scoreCascade: ScoreCascade;
  setSelectedScoreCascade: (c: ScoreCascade) => void;
};

const ScoreCascadeView = ({ scoreCascade, setSelectedScoreCascade }: Props) => {
  const [expanded, setExpanded] = useState(false);

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
        { scoreCascade.subscores.length !== 0 && (
          <button
            type="button"
            className="score-cascade-expand-button"
            onClick={() => setExpanded((e) => !e)}
          >
            { expanded ? (
              <i className="score-cascade-expand-icon bi-caret-down" />
            ) : (
              <i className="score-cascade-expand-icon bi-caret-up" />
            )}
          </button>
        )}
      </button>
      <div className={`sub-score-cascade ${expanded ? 'expanded' : ''}`}>
        {scoreCascade.subscores.map((subCascade) => (
          <ScoreCascadeView
            scoreCascade={subCascade}
            setSelectedScoreCascade={setSelectedScoreCascade}
          />
        ))}
      </div>
    </div>
  );
};

export default ScoreCascadeView;
