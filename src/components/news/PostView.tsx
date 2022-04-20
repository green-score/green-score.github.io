import React from 'react';
import { Post } from '../../types/post';

type Props = {
  post: Post;
};

const PostView = ({ post }: Props) => {
  return (
    <div className="post-view justify-content-center">
      <div className="d-flex justify-content-center"> <h1> { post.title } </h1> </div>
      <div className="d-flex justify-content-center"> <i> { post.description } </i> </div>
      <div> <img src={post.thumbnailSrc} alt="thumbnail" /> </div>
    </div>
  );
};

export default PostView;
