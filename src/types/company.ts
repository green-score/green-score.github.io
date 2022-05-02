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
  /** relevancy tags? Helps with search certainly */
  tags?: string[];
  /** Whether this company is a certified Green Partner */
  partner?: boolean;
}

/**
 *
 */
export interface Company extends CompanyPreview {
  /** Manual Desc */
  description?: string;
  /** Multiple scores for historical reference. scores[0] is current score */
  /** Should each one be deeply new? or can have common subscores? */
  /** Actually, I think that a company only needs to know the ScorePreview */
  /** Inside the actual model, we will have it like scores: Score[] */
  /** But in the front end we only need to know the ScorePreview in the company view */
  // scores: [Score];
  score: Score;
}
