import React from 'react';
import { Modal } from 'react-bootstrap';
import { observer } from 'mobx-react';
import { ScoreVersion } from '../../types/score';
import useScoreStore from '../../state/ScoreStore';
// import CompanyView from '../company/CompanyView';
import ScoreView from './ScoreView';

type Props = {
  scorePreview: ScoreVersion;
  factorID: string;
};

const ScoreIcon = observer(({ scorePreview, factorID }: Props) => {
  const store = useScoreStore();

  return (
    <>
      <button
        type="button"
        className={`score-icon ${scorePreview.value.toLowerCase()}`}
        onClick={() => store.openScore(scorePreview.id, factorID)}
      >
        <h1> { scorePreview.value.toUpperCase() } </h1>
      </button>
      <Modal
        className="score-modal"
        show={store.open}
        onHide={store.closeScore}
      >
        {store.open && store.openScoreVersionID && store.openFactorID && (
          <ScoreView scoreVersionID={store.openScoreVersionID} factorID={store.openFactorID} />
        )}
      </Modal>
    </>
  );
});

export default ScoreIcon;
