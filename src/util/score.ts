import { Factor, Score, ScoreCascade, ScoreGrade } from '../types/score';
import { getFactor, getScore } from '../routes/score';

/**
 * TODO: MAKE THIS BASED ON ENV VARS?
 *
 * @param value
 */
const getScoreGrade = (value: number): ScoreGrade => {
  if (value < 50) {
    return 'F';
  }
  if (value < 65) {
    return 'D';
  }
  if (value < 75) {
    return 'C';
  }
  if (value < 85) {
    return 'B';
  }
  return 'A';
};

const getScoreKey = (scoreVersionID: string, factorID: string): string => `${scoreVersionID}_${factorID}`;

/**
 * This is the function that retrieves the entire score cascade object
 * from the database for us to actually display it on the front end.
 *
 * @param scoreVersionID The ID of the score version for the score to display.
 * @param factorID The ID of the factor that corresponds to the score.
 */
const getScoreCascade = async (scoreVersionID: string, factorID: string): Promise<ScoreCascade> => {
  const factor: Factor = await getFactor(factorID);
  const score: Score = await getScore(getScoreKey(scoreVersionID, factorID));
  const scoreCascade: ScoreCascade = {
    name: factor.name,
    value: score.value,
    scoreDescription: score.description,
    factorDescription: factor.description,
    subscores: [],
  };
  if (factor.subfactorIDs) {
    for (let i = 0; i < factor.subfactorIDs.length; i++) {
      scoreCascade.subscores.push(
        // eslint-disable-next-line no-await-in-loop
        await getScoreCascade(scoreVersionID, factor.subfactorIDs[i]),
      );
    }
  }
  return scoreCascade;
};

export {
  getScoreCascade,
  getScoreGrade,
};
