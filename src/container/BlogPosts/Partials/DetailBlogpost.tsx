import React, { useEffect, useState } from 'react'; 
import { DetailBlogpostState } from '../BlogPosts.types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailBlogpost = () => {
  const [post, setPost] = useState<DetailBlogpostState>({ title: '', body: '' });
  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL_API}${id}`).then(res => setPost(res.data));
  }, []);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default DetailBlogpost;
