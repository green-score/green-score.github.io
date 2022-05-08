import testScores from './score.json';
import testPosts from './post.json';
import testFactors from './factor.json';
import testCompanies from './company.json';
import testScoreVersions from './score_version.json';
import {
  companySpreadsheetURL, factorSpreadsheetURL, postSpreadsheetURL,
  scoreSpreadsheetURL, scoreVersionSpreadsheetURL,
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
    case postSpreadsheetURL:
      // @ts-ignore
      return insertPosts(testPosts);
    case companySpreadsheetURL:
      // @ts-ignore
      return testCompanies;
    case scoreVersionSpreadsheetURL:
      // @ts-ignore
      return testScoreVersions;
    case scoreSpreadsheetURL:
      // @ts-ignore
      return testScores;
    case factorSpreadsheetURL:
      // @ts-ignore
      return testFactors;
    default:
      // eslint-disable-next-line no-console
      console.error('Unrecognized TEST_DATA URL...');
      return undefined;
  }
};
