import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { observer } from 'mobx-react';
import LoadingIndicator from '../common/LoadingIndicator';
import usePostStore from '../../state/PostStore';
import { err, log } from '../../console';
import PostCard from './PostCard';
import PostView from './PostView';

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
    <div className="post-feed">
      { store.postFeed.map((post) => {
        return (<PostCard postPreview={post} onClick={() => store.openPost(post.id)} />);
      })}
      <LoadingIndicator onView={fetchPosts} />
      <Modal show={store.openModalPost !== null} onHide={store.closePost}>
        {store.openModalPost && (
          <PostView post={store.openModalPost} />
        )}
      </Modal>
    </div>
  );
});

export default PostFeed;
