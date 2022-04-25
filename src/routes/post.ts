import Papa from 'papaparse';
import { Post, PostPreview } from '../types/post';
import { PRODUCTION, SPREADSHEET_URL } from '../Env';

const NUM_FETCH = 5;
const POSTS: Post[] = [];

type SpreadSheetPost = {
  Timestamp: string;
  category: string;
  author: string;
  title: string;
  description: string;
  thumbnail: string;
  heading1: string;
  body1: string;
  heading2: string;
  body2: string;
  heading3: string;
  body3: string;
  live: string;
  production: string;
  url: string;
};

const spreadsheetItemToPost = ({
  Timestamp,
  category,
  author,
  title,
  description,
  thumbnail,
  heading1,
  body1,
  heading2,
  body2,
  heading3,
  body3,
  live,
  production,
  url,
}: SpreadSheetPost, i: number): Post => {
  console.log(Timestamp);
  return {
    id: `${i}`,
    title,
    category,
    author,
    thumbnailSrc: thumbnail.replace('open', 'uc'),
    live: new Date(live),
    description,
    production: production === 'yes',
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

const loadPosts = async (): Promise<Post[]> => new Promise((resolve, reject) => {
  Papa.parse<SpreadSheetPost>(`${SPREADSHEET_URL}/export?format=csv`, {
    download: true,
    header: true,
    complete: (results) => {
      resolve(results.data.flatMap((s, i) => {
        const p = spreadsheetItemToPost(s, i);
        return p.production !== PRODUCTION ? [] : p;
      }));
    },
    error(error: Error) {
      console.error(error);
      reject(error);
    },
  });
});

const getAllPosts = async (): Promise<Post[]> => {
  if (POSTS.length === 0) {
    POSTS.push(...await loadPosts());
  }
  return POSTS;
};

export const getPostByID = async (id: string): Promise<Post | null> => (
  (await getAllPosts())[parseInt(id, 10)]
);

export type PostFetchResult = {
  posts: PostPreview[];
  offset: number;
};

export const fetchNextPosts = async (offset: number): Promise<PostFetchResult> => {
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
