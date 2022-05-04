/**
 * We will almost always only want to preview the primary score
 * for a company. This is the only information we really need
 * to know in order to display a score for a company.
 *
 * This will always be a Base Score.
 */
export interface ScorePreview {
  id: string;
  value: number; // between 0.0 and 100.0 (inclusive)
}

/**
 * This shit is like your report card.
 */
export enum ScoreGrade {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F'
}

export type ScoreVersion = {
  value: ScoreGrade;
};

/**
 * Factor
 * (An environmentally relevant attribute that a company can have that can be assigned a value)
 *
 * If discrete is true, then minValue
 */
export type Factor = {
  id: string;
  name: string;
  description: string;
  subfactorIDs: string[];
  // TODO // minValue?: number;
  // TODO // maxValue?: number;
  // TODO // discrete: boolean;
};

/**
 *
 * Invariants:
 * - either factor is null or subscores are empty. Both cannot be true and both cannot be false.
 * - If factor is not null, it is a FactorScore
 * - If subscores aren’t empty, it is an CompositeScore
 */
export interface Score extends ScorePreview {
  key: string;
  description: string;
  // companyID: string;
  // TODO subscores: Score[];
  // TODO factor?: Factor;
  // TODO parent?: Score;
}

/**
 * This represents the full JSON object to show the
 */
export type ScoreCascade = {
  name: string;
  factorDescription: string;
  scoreDescription: string;
  value: number;
  subscores: ScoreCascade[];
};
