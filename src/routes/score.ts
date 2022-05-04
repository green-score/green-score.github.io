import { Factor, Score, ScoreVersion } from '../types/score';

let SCORES: { [key: string]: Score } | null = null;
let SCORE_VERSIONS: { [id: string]: ScoreVersion } | null = null;
let FACTORS: { [id: string]: Factor } | null = null;

export const getScoreVersion = async (id: string): Promise<ScoreVersion> => {
  if (SCORE_VERSIONS === null) {
    SCORE_VERSIONS = {};
  }

  return SCORE_VERSIONS[id];
};

export const getFactor = async (id: string): Promise<Factor> => {
  if (FACTORS === null) {
    FACTORS = {};
  }

  return FACTORS[id];
};

export const getScore = async (key: string): Promise<Score> => {
  if (SCORES === null) {
    SCORES = {};
  }

  return SCORES[key];
};
