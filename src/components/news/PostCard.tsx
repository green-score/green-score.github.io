import React from 'react';
import { PostPreview } from '../../types/post';

type Props = {
  postPreview: PostPreview;
  onClick: () => void;
};

const PostCard = ({ onClick, postPreview }: Props) => {
  return (
    <button type="button" className="post-preview-container justify-content-center" onClick={onClick}>
      <h1> { postPreview.title } </h1>
      <i className="text-align-start"> { postPreview.description } </i>
      <img className="post-preview-thumbnail" src={postPreview.thumbnailSrc} alt="thumbnail" />
    </button>
  );
};

export default PostCard;
