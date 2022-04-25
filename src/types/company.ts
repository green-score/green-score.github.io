import type { Score, ScorePreview } from './score';

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
 * The information that is needed to display the Company on the
 * list of search results from the Search bar.
 */
export interface CompanyPreview {
  id: string;
  name: string;
  /** sectors that the company is a part of */
  /** Sorted in order of relevance to the search! */
  sectors: [CompanySector];
  /** The score information to display */
  scorePreview: ScorePreview;
}

/**
 *
 */
export interface Company extends CompanyPreview {
  description: string;
  /** Multiple scores for historical reference. scores[0] is current score */
  /** Should each one be deeply new? or can have common subscores? */
  scores: [Score];
}
