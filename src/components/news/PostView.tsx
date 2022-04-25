import React from 'react';
import { Post } from '../../types/post';

type Props = {
  post: Post;
};

/**
 * Post title
 * Category/tags(?) in the badge
 * Image (clicking brings to URL?)
 * Author and timestamp (a tags for URL?)
 * Heading1
 * body1
 * ...
 * Read more at this URL
 */

const PostView = ({ post }: Props) => {
  return (
    <div className="post-view justify-content-center">
      <div className="d-flex justify-content-center"> <h1> { post.title } </h1> </div>
      <div className="d-flex justify-content-center"> <i> { post.description } </i> </div>
      <div> <img className="post-image" src={post.thumbnailSrc} alt="thumbnail" /> </div>
    </div>
  );
};

export default PostView;
