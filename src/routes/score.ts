import { Factor, Score, ScoreVersion, stringToScoreGrade } from '../types/score';
import loadRows, {
  SpreadsheetFactor,
  SpreadsheetScore,
  SpreadsheetScoreValue,
  strToList,
} from './spreadsheet';
import {
  FACTOR_SPREADSHEET_URL,
  SCORE_SPREADSHEET_URL,
  SCORE_VERSION_SPREADSHEET_URL,
} from '../Env';

let SCORES: { [key: string]: Score } | null = null;
let SCORE_VERSIONS: { [id: string]: ScoreVersion } | null = null;
let FACTORS: { [id: string]: Factor } | null = null;

const convertScoreVersion = async (s: SpreadsheetScoreValue, i: number): Promise<ScoreVersion> => ({
  id: `${i}`,
  value: stringToScoreGrade(s.value),
});

const convertScore = async (s: SpreadsheetScore, i: number): Promise<Score> => ({
  id: `${i}`,
  key: s.key,
  value: parseInt(s.value, 10),
  description: s.description,
});

const convertFactor = async (s: SpreadsheetFactor, i: number): Promise<Factor> => ({
  id: `${i}`,
  name: s.name,
  description: s.description,
  subfactorIDs: s.subfactorIDs ? strToList(s.subfactorIDs) : undefined,
});

export const getScoreVersion = async (id: string): Promise<ScoreVersion> => {
  if (SCORE_VERSIONS === null) {
    SCORE_VERSIONS = {};
    const scoreVersions = await loadRows(SCORE_VERSION_SPREADSHEET_URL, convertScoreVersion);
    console.log(scoreVersions);
    for (let i = 0; i < scoreVersions.length; i++) {
      const version = scoreVersions[i];
      SCORE_VERSIONS[version.id] = version;
    }
  }

  return SCORE_VERSIONS[id];
};

export const getFactor = async (id: string): Promise<Factor> => {
  if (FACTORS === null) {
    FACTORS = {};
    const factors = await loadRows(FACTOR_SPREADSHEET_URL, convertFactor);
    for (let i = 0; i < factors.length; i++) {
      const factor = factors[i];
      FACTORS[factor.id] = factor;
    }
  }

  return FACTORS[id];
};

export const getScore = async (key: string): Promise<Score> => {
  if (SCORES === null) {
    SCORES = {};
    const scores = await loadRows(SCORE_SPREADSHEET_URL, convertScore);
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      SCORES[score.id] = score;
    }
  }

  return SCORES[key];
};
