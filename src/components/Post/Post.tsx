import React from 'react';
import {
  PostStyled,
  PostImage,
  PostContent,
  PostTitle,
  PostDesc,
  ButtonDanger,
  ButtonSuccess,
} from './Post.styles';
import { IPropsPost } from './Post.types';
import { useNavigate } from 'react-router';

const Post = (props: IPropsPost) => {
  const navigate = useNavigate();
  return (
    <PostStyled>
      <PostImage>
        <img src="https://placeimg.com/200/150/tech" alt="dummy" />
      </PostImage>
      <PostContent>
        <PostTitle onClick={() => navigate(`/detail-blog/${props.data.id}`)} aria-hidden>
          { props.data.title }
        </PostTitle>
        <PostDesc>{ props.data.body }</PostDesc>
        <ButtonSuccess onClick={() => props.update(props.data)}>Update</ButtonSuccess>
        <ButtonDanger onClick={() => props.remove(props.data.id)}>Remove</ButtonDanger>
      </PostContent>
    </PostStyled>
  );
};

export default Post;
