import React, { useEffect, useState } from 'react';
import { ScoreCascade } from '../../types/score';
import { getScoreCascade } from '../../util/score';
import ScoreCascadeView from './ScoreCascadeView';
import ScoreCascadeDescription from './ScoreCascadeDescription';
import LoadingIndicator from '../common/LoadingIndicator';

type Props = {
  scoreVersionID: string;
  factorID: string;
};

const ScoreView = ({ scoreVersionID, factorID }: Props) => {
  const [scoreCascade, setScoreCascade] = useState<ScoreCascade>();
  const [selectedScoreCascade, setSelectedScoreCascade] = useState<ScoreCascade>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getScoreCascade(scoreVersionID, factorID).then((s) => {
      setScoreCascade(s);
      setSelectedScoreCascade(s);
      setLoading(false);
    });
  }, [scoreVersionID, factorID]);

  return (
    <div className="score-view">
      <div className="score-info">
        {selectedScoreCascade && (
          <ScoreCascadeDescription scoreCascade={selectedScoreCascade} />
        )}
      </div>
      <div className="score-cascade-view">
        {scoreCascade && (
          <ScoreCascadeView
            scoreCascade={scoreCascade}
            selectedName={selectedScoreCascade?.name}
            setSelectedScoreCascade={setSelectedScoreCascade}
          />
        )}
      </div>
      { loading && <LoadingIndicator /> }
    </div>
  );
};

export default ScoreView;
