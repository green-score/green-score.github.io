export enum PostCategory {
  GreenStory = 'GreenStory',
  BusinessTips = 'BusinessTips',
  LocalHighlight = 'LocalHighlight',
  OPed = 'OPed',
  Other = 'Other'
}

// export const getCategory = (category: string): PostCategory => {
//   for (let c: PostCategory in PostCategory.values()) {
//
//   }
//   return PostCategory.OPed
// };

// For the news feed
export interface PostPreview {
  id: string;
  title: string;
  category: string;
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
  author: string;
  url?: string;
  headings?: string[];
  sections?: string[];
}
