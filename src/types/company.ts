import type { Score } from './score';

/**
 * Which sector the company is a part of.
 */
export enum CompanySector {
  Cloud = 'Cloud',
  Dining = 'Dining',
  Grocery = 'Grocery',
  Technology = 'Technology',
}

/**
 * The information that
 */
export interface CompanyPreview {
  id: string;
  name: string;
  description: string;
}

/**
 *
 */
export interface Company extends CompanyPreview {
  /** sectors that the company is a part of */
  sectors: [CompanySector];
  /** Multiple scores for historical reference. */
  /** Should each one be deeply new? or can have common subscores? */
  scores: [Score];
}
