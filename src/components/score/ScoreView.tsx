import React, { useEffect, useState } from 'react';
import { ScoreCascade } from '../../types/score';
import { getScoreCascade } from '../../util/score';
import ScoreCascadeView from './ScoreCascadeView';
import ScoreCascadeDescription from './ScoreCascadeDescription';

type Props = {
  scoreVersionID: string;
  factorID: string;
};

const ScoreView = ({ scoreVersionID, factorID }: Props) => {
  const [scoreCascade, setScoreCascade] = useState<ScoreCascade>();
  const [selectedScoreCascade, setSelectedScoreCascade] = useState<ScoreCascade>();

  useEffect(() => {
    getScoreCascade(scoreVersionID, factorID).then(setScoreCascade);
  }, [scoreVersionID, factorID]);

  return (
    <div className="score-view">
      <div className="score-cascade-view">
        {scoreCascade && (
          <ScoreCascadeView
            scoreCascade={scoreCascade}
            setSelectedScoreCascade={setSelectedScoreCascade}
          />
        )}
      </div>
      <div className="score-info">
        {selectedScoreCascade && (
          <ScoreCascadeDescription scoreCascade={selectedScoreCascade} />
        )}
      </div>
    </div>
  );
};

export default ScoreView;
