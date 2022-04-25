import { Company, CompanyPreview } from '../types/company';
import { Post } from '../types/post';
import { Score } from '../types/score';
import { TEST_DATA } from '../Constants';
import { getTestPost, testPostFeed } from './offline/post';
import { fetchNextPosts, getPostByID, PostFetchResult } from './post';
// import { CompanyFetchResult } from './company';
import { getTestCompany, testCompanyResults } from './offline/company';
import { getTestScore } from './offline/score';

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

export type CompanyFetchResult = {
  companies: CompanyPreview[];
  offset: number;
};

const fetchCompanies = async (term: string, offset: number): Promise<CompanyFetchResult> => {
  if (TEST_DATA) {
    return { companies: testCompanyResults, offset: -1 };
  }

  return { companies: [], offset };
};

const getCompany = async (id: string): Promise<Company | null> => {
  if (TEST_DATA) {
    return getTestCompany(id);
  }

  return null;
};

const getScore = async (id: string): Promise<Score | null> => {
  if (TEST_DATA) {
    return getTestScore(id);
  }

  return null;
};

export {
  fetchCompanies,
  fetchPosts,
  getCompany,
  getPost,
  getScore,
};
