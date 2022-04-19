import { Company, CompanyPreview } from '../types/company';
import { Post, PostPreview } from '../types/post';
import { Score } from '../types/score';
import { TEST_DATA } from '../Constants';
import { getTestPost, testPostFeed } from './offline/posts';

const fetchPosts = async (): Promise<PostPreview[]> => {
  if (TEST_DATA) {
    return testPostFeed;
  }

  return [];
};

const getPost = async (id: string): Promise<Post | null> => {
  if (TEST_DATA) {
    return getTestPost(id);
  }

  return null;
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
