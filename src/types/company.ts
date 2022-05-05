import type { ScoreVersion } from './score';

// TODO: Need to stabilize this type
// 1. Make clear what is TODO here
// 2. Get the distinction with the CompanyPreview better
//      Like what do we actually need to show?

/**
 * Which sector the company is a part of.
 */
export type CompanySector = (
  'Cloud' | 'Dining' | 'Grocery' | 'Technology' |
  'Shopping' | 'Clothing' | 'Other'
);
const CompanySectorTypes: string[] = [
  'Cloud', 'Dining', 'Grocery', 'Technology',
  'Shopping', 'Clothing', 'Other',
];
export const stringToCompanySector = (s: string): CompanySector => {
  if (CompanySectorTypes.includes(s)) {
    return <CompanySector>s;
  }
  return 'Other';
};

/**
 * The information that is needed to display the Company on the
 * list of search results from the Search bar.
 */
export interface CompanyPreview {
  id: string;
  name: string;
  /** sectors that the company is a part of */
  /** Sorted in order of relevance to the search! */
  sectors: CompanySector[];
  /** The score information to display */
  // scorePreview: ScorePreview;
  scoreVersion: ScoreVersion; // this will act as the preview
  factorID: string;
  /** relevancy tags? Helps with search certainly */
  // TODO tags?: string[];
  /** Whether this company is a certified Green Partner */
  // TODO partner?: boolean;
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
  // score: Score;
}
