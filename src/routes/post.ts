import { Post, PostPreview } from '../types/post';
import { postSpreadsheetURL } from '../Env';
import loadRows, { SpreadSheetPost } from './spreadsheet';

// In the real version, these won't be stored on the front-end.
const NUM_FETCH = 5;
const POSTS: Post[] = [];

const spreadsheetItemToPost = async ({
  category, author, title, description, thumbnail, heading1, body1,
  heading2, body2, heading3, body3, live, url,
}: SpreadSheetPost, i: number): Promise<Post> => {
  return {
    id: `${i}`,
    title,
    category,
    author,
    thumbnailSrc: thumbnail.replace('open', 'uc'),
    live: live === undefined ? undefined : new Date(live),
    description,
    url,
    headings: [
      heading1,
      heading2,
      heading3,
    ],
    sections: [
      body1,
      body2,
      body3,
    ],
  };
};

const loadPosts = async (): Promise<Post[]> => loadRows<SpreadSheetPost, Post>(
  postSpreadsheetURL,
  spreadsheetItemToPost,
);

const getAllPosts = async (): Promise<Post[]> => {
  if (POSTS.length === 0) {
    POSTS.push(...await loadPosts());
  }
  return POSTS;
};

export const getPost = async (id: string): Promise<Post | null> => (
  (await getAllPosts())[parseInt(id, 10)]
);

export type PostFetchResult = {
  posts: PostPreview[];
  offset: number;
};

export const fetchPosts = async (offset: number): Promise<PostFetchResult> => {
  if (offset === -1) {
    // offset -1 should just return nothing
    return { posts: [], offset };
  }

  // if we're done with the list, return -1 for offset.
  const posts = await getAllPosts();
  return {
    posts: posts.slice(offset, offset + NUM_FETCH),
    offset: ((offset + NUM_FETCH) >= posts.length) ? -1 : offset + NUM_FETCH,
  };
};
