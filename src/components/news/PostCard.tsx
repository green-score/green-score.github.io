import React from 'react';
import { PostPreview } from '../../types/post';

type Props = {
  postPreview: PostPreview;
  onClick: () => void;
};

const PostCard = ({ onClick, postPreview }: Props) => {
  return (
    <button type="button" className="post-view-container justify-content-center" onClick={onClick}>
      <div className="d-flex justify-content-center"> <h1> { postPreview.title } </h1> </div>
      <div className="d-flex justify-content-center"> <i> { postPreview.description } </i> </div>
      <div> <img src={postPreview.thumbnailSrc} alt="thumbnail" /> </div>
    </button>
  );
};

export default PostCard;
