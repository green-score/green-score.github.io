import React from 'react';

type Props = {
  value: string;
  dimension?: string;
  onClick?: () => void;
};

const ScoreIcon = ({ value, dimension = '6rem', onClick }: Props) => (
  <button
    type="button"
    className={`score-icon ${value.toLowerCase()}`}
    onClick={() => onClick && onClick()}
    style={{ width: dimension, height: dimension, borderRadius: `calc(${dimension} / 2)` }}
  >
    <b style={{ fontSize: '4rem' }}>
      <h1 style={{ marginTop: '0.5rem' }}> { value.toUpperCase() } </h1>
    </b>
  </button>
);

export default ScoreIcon;
