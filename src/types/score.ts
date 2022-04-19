import type { Company } from './company';

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
export type Score = {
  id: string;
  value: number; // between 0.0 and 100.0 (inclusive)
  description: string;
  company: Company;
  subscores?: [Score];
  factor?: Factor;
  parent?: Score;
};
