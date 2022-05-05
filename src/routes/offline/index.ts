import testScores from './score.json';
import testPosts from './post.json';
import testFactors from './factor.json';
import testCompanies from './company.json';
import testScoreVersions from './score_version.json';
import {
  COMPANY_SPREADSHEET_URL, FACTOR_SPREADSHEET_URL,
  POSTFORM_SPREADSHEET_URL, SCORE_SPREADSHEET_URL,
  SCORE_VERSION_SPREADSHEET_URL,
} from '../../Env';
import { SpreadSheetPost, SpreadsheetType } from '../spreadsheet';
import me from '../../images/me.png';

const imageMap: { [key: string]: string } = {
  me,
};

const insertPosts = (posts: SpreadSheetPost[]) => {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    post.thumbnail = imageMap[post.thumbnail];
  }
  return posts;
};

export default <T extends SpreadsheetType>(url: string): T[] | undefined => {
  switch (url) {
    case POSTFORM_SPREADSHEET_URL:
      // @ts-ignore
      return insertPosts(testPosts);
    case COMPANY_SPREADSHEET_URL:
      // @ts-ignore
      return testCompanies;
    case SCORE_VERSION_SPREADSHEET_URL:
      // @ts-ignore
      return testScoreVersions;
    case SCORE_SPREADSHEET_URL:
      // @ts-ignore
      return testScores;
    case FACTOR_SPREADSHEET_URL:
      // @ts-ignore
      return testFactors;
    default:
      // eslint-disable-next-line no-console
      console.error('Unrecognized TEST_DATA URL...');
      return undefined;
  }
};
