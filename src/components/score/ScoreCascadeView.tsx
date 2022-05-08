import React, { useState } from 'react';
import { ScoreCascade } from '../../types/score';
import { getScoreGrade } from '../../util/score';
import ScoreIcon from './ScoreIcon';

type Props = {
  scoreCascade: ScoreCascade;
  selectedName?: string;
  setSelectedScoreCascade: (c: ScoreCascade) => void;
};

const ScoreCascadeView = ({
  scoreCascade,
  selectedName = undefined,
  setSelectedScoreCascade,
}: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="score-cascade">
      <button
        type="button"
        className={`score-cascade-view ${selectedName === scoreCascade.name ? 'selected' : ''}`}
        onClick={() => setSelectedScoreCascade(scoreCascade)}
      >
        <ScoreIcon value={getScoreGrade(scoreCascade.value)} dimension="3rem" />
        {' '}
        <p>{ scoreCascade.name }</p>
        <button
          type="button"
          className={`score-cascade-expand-button ${scoreCascade.subscores.length === 0 ? 'd-none' : ''}`}
          onClick={() => setExpanded((e) => !e)}
        >
          { expanded ? (
            <i className="score-cascade-expand-icon bi-caret-down" />
          ) : (
            <i className="score-cascade-expand-icon bi-caret-up" />
          )}
        </button>
      </button>
      <div className={`sub-score-cascade ${expanded ? 'expanded' : ''}`}>
        {scoreCascade.subscores.map((subCascade) => (
          <ScoreCascadeView
            scoreCascade={subCascade}
            selectedName={selectedName}
            setSelectedScoreCascade={setSelectedScoreCascade}
          />
        ))}
      </div>
    </div>
  );
};

export default ScoreCascadeView;
