
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
  value: number;  // between 0.0 and 100.0 (inclusive)
  description: string;
  company: Company;
  subscores?: [Score];
  factor?: Factor;
  parent?: Score;
};

export enum Sector {
  Cloud = "Cloud",
  Dining = "Dining",
  Grocery = "Grocery",
  Technology = "Technology",
}

/**
 *
 */
export type Company = {
  id: string;
  name: string;
  description: string;
  /** */
  sectors: [Sector];
  /** Multiple scores for historical reference. */
  /** Should each one be deeply new? or can have common subscores? */
  scores: [Score];
};

export enum PostCategory {
  GreenStory = "GreenStory",
  BusinessTips = "BusinessTips",
  LocalHighlight = "LocalHighlight",
  OPed = "OPed",
  Other = "Other"
}

// For the news feed
export type Post = {
  id: string;
  title: string;
  category: PostCategory;
  description: string; /** 150 characters max */
  thumbnail?: HTMLImageElement;
  url?: string;
  headings?: [string];
  sections?: [string];
  activeOn: Date;
  production: boolean;
};