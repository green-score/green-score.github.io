import { Company, CompanyPreview } from '../types/company';
import { Post, PostPreview } from '../types/post';
import { Score } from '../types/score';
import { TEST_DATA } from '../Constants';
import { getTestPost, testPostFeed } from './offline/posts';
import { fetchNextPosts, getPostByID, PostFetchResult } from './post';

const fetchPosts = async (offset: number): Promise<PostFetchResult> => {
  if (TEST_DATA) {
    return { posts: testPostFeed, offset: -1 };
  }

  return fetchNextPosts(offset);
};

const getPost = async (id: string): Promise<Post | null> => {
  if (TEST_DATA) {
    return getTestPost(id);
  }

  return getPostByID(id);
};

const fetchCompanies = async (): Promise<CompanyPreview[]> => {
  return [];
};

const getCompany = async (_id: string): Promise<Company | null> => {
  return null;
};

const getScore = async (): Promise<Score | null> => {
  return null;
};

export {
  fetchCompanies,
  fetchPosts,
  getCompany,
  getPost,
  getScore,
};
