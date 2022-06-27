import React from 'react';
import './Post.styles.css';
import { IPropsPost } from './Post.types';
import { useNavigate } from 'react-router';

const Post = (props: IPropsPost) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__image">
        <img src="https://placeimg.com/200/150/tech" alt="dummy" />
      </div>
      <div className="post__content">
        <p className="post__title" onClick={() => navigate(`/detail-blog/${props.data.id}`)} aria-hidden>{ props.data.title }</p>
        <p className="post__desc">{ props.data.body }</p>
        <button className="button button--success" onClick={() => props.update(props.data)}>Update</button>
        <button className="button button--danger" onClick={() => props.remove(props.data.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Post;
