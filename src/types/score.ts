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
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
  F = 'f'
}

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
  minValue?: number;
  maxValue?: number;
  discrete: boolean;
};

/**
 *
 * Invariants:
 * - either factor is null or subscores are empty. Both cannot be true and both cannot be false.
 * - If factor is not null, it is a FactorScore
 * - If subscores aren’t empty, it is an CompositeScore
 */
export interface Score extends ScorePreview {
  description: string;
  // companyID: string;
  subscores: Score[];
  factor?: Factor;
  parent?: Score;
}
