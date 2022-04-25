import { Post, PostCategory, PostPreview } from '../../types/post';
import { now } from '../../util/time';
import me from '../../images/me.png';

const testPostFeed: PostPreview[] = [{
  id: '1',
  title: 'The QUEEN just fucking Died',
  live: now(),
  description: 'You\'ll NEVER believe what happened to the queen',
  thumbnailSrc: me,
  category: PostCategory.OPed,
  production: false,
}, {
  id: '2',
  title: '9 Places you want to be this winter',
  live: now(),
  description: 'but you cannot aha',
  thumbnailSrc: me,
  category: PostCategory.BusinessTips,
  production: false,
}, {
  id: '3',
  title: 'Why amazon is the greenest compnay, you WON\'t believe this',
  live: now(),
  description: 'because it is DEFINITELy not true lmfao',
  thumbnailSrc: me,
  category: PostCategory.GreenStory,
  production: false,
}];

const post: { [id: string]: Post } = {
  1: {
    ...testPostFeed[0],
    author: 'Leo Belyi',
    headings: [],
    sections: [],
  },
  2: {
    ...testPostFeed[1],
    author: 'Leo Belyi',
    headings: [],
    sections: [],
  },
  3: {
    ...testPostFeed[2],
    author: 'Leo Belyi',
    headings: [],
    sections: [],
  },
};

const getTestPost = (id: string): Post => post[id];

export {
  getTestPost,
  testPostFeed,
};
