/** Pretty much done, check in with Nate for more Post features. */

export type PostCategory = 'GreenStory' | 'BusinessTips' | 'LocalHighlight' | 'OPed' | 'Other';
const PostCategoryTypes = ['GreenStory', 'BusinessTips', 'LocalHighlight', 'OPed', 'Other'];
export const stringToPostCategory = (s: string): PostCategory => {
  if (PostCategoryTypes.includes(s)) {
    return <PostCategory>s;
  }
  return 'Other';
};

// For the news feed
export interface PostPreview {
  id: string;
  title: string;
  category: string;
  thumbnailSrc?: string;
  description: string; /** 150 characters max */
  live?: Date;
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
