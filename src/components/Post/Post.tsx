import React from 'react';
import './Post.styles.css';
import { IPropsPost } from './Post.types';

const Post = (props: IPropsPost) => {
  return (
    <div className="post">
      <div className="post__image">
        <img src="https://placeimg.com/200/150/tech" alt="dummy" />
      </div>
      <div className="post__content">
        <p className="post__title">{ props.data.title }</p>
        <p className="post__desc">{ props.data.body }</p>
        <button className="button button--danger" onClick={() => props.remove(props.data.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Post;
