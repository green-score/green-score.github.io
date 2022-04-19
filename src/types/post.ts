export enum PostCategory {
  GreenStory = 'GreenStory',
  BusinessTips = 'BusinessTips',
  LocalHighlight = 'LocalHighlight',
  OPed = 'OPed',
  Other = 'Other'
}

// For the news feed
export interface PostPreview {
  id: string;
  title: string;
  category: PostCategory;
  thumbnailSrc?: string;
  description: string; /** 150 characters max */
  live: Date;
  production: boolean;
}

/**
 * A post wants to have exactly the same data as a
 * post preview, * except with more details included.
 */
export interface Post extends PostPreview {
  url?: string;
  headings?: string[];
  sections?: string[];
}
