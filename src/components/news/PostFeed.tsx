import React from 'react';
import { observer } from 'mobx-react';
import PostView from './PostView';
import LoadingIndicator from '../common/LoadingIndicator';
import usePostStore from '../../state/PostStore';
import { err, log } from '../../console';

const PostFeed = observer(() => {
  const store = usePostStore();

  const fetchPosts = () => {
    store.fetchPosts().then(() => {
      console.log(store.postFeed.length);
      log('Successfully fetched posts!');
    }).catch((error) => {
      err(error);
    });
  };

  return (
    <div>
      { store.postFeed.map((post) => {
        console.log(post);
        return (<PostView post={post} />);
      })}
      <LoadingIndicator onView={fetchPosts} />
    </div>
  );
});

export default PostFeed;
