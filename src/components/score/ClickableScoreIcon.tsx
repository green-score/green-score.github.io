import React from 'react';
import { observer } from 'mobx-react';
import { ScoreVersion } from '../../types/score';
import useScoreStore from '../../state/ScoreStore';
import Modal from '../common/Modal';
import ScoreView from './ScoreView';
import ScoreIcon from './ScoreIcon';

type Props = {
  scorePreview: ScoreVersion;
  factorID: string;
  dimension?: string;
  clickable?: boolean;
};

const ClickableScoreIcon = observer(({ scorePreview, factorID, dimension = '6rem', clickable = true }: Props) => {
  const store = useScoreStore();

  return (
    <>
      <ScoreIcon
        value={scorePreview.value}
        dimension={dimension}
        onClick={() => store.openScore(scorePreview.id, factorID)}
      />
      <Modal
        className="score-modal"
        show={store.open}
        onHide={store.closeScore}
      >
        {store.openScoreVersionID && store.openFactorID && (
          <ScoreView scoreVersionID={store.openScoreVersionID} factorID={store.openFactorID} />
        )}
      </Modal>
    </>
  );
});

export default ClickableScoreIcon;
