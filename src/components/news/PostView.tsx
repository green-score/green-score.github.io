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

const getBody = (headings?: string[], sections?: string[]): React.ReactElement[] => {
  const body: React.ReactElement[] = [];
  const hs = headings || [];
  const ss = sections || [];
  for (let i = 0; i < Math.max(hs.length, ss.length); i++) {
    const h = hs[i];
    const s = ss[i];

    // If the heading/section exists, add it to the body
    h && body.push(<div className="post-view-header"><h2>{ h }</h2></div>);
    s && body.push(<div className="post-view-section"><p>{ s }</p></div>);
  }
  return body;
};

const PostView = ({ post }: Props) => {
  return (
    <div className="post-view justify-content-center">
      <div className="post-view-title d-flex justify-content-center"> <h1> { post.title } </h1> </div>
      <div className="post-view-subtitle d-flex justify-content-around">
        <i> { post.category } </i>
        <a href={post.url}> View on external site </a>
      </div>
      <div> <img className="post-view-image" src={post.thumbnailSrc} alt="thumbnail" /> </div>
      <div className="post-view-sub-image d-flex justify-content-around">
        <i> Author: { post.author } </i>
        { post.live && `On: ${post.live.toDateString()}`}
      </div>
      <div className="post-view-body">
        { getBody(post.headings, post.sections) }
      </div>
    </div>
  );
};

export default PostView;
