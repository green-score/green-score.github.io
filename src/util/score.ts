import { ScoreGrade } from '../types/score';

/**
 * TODO: MAKE THIS BASED ON ENV VARS?
 *
 * @param value
 */
const getScoreGrade = (value: number): ScoreGrade => {
  if (value < 50) {
    return ScoreGrade.A;
  }
  if (value < 65) {
    return ScoreGrade.B;
  }
  if (value < 75) {
    return ScoreGrade.C;
  }
  if (value < 85) {
    return ScoreGrade.B;
  }
  return ScoreGrade.A;
};

export {
  getScoreGrade,
};
