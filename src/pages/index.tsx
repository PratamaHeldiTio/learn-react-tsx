import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YoutubePage from './youtube';
import ProductPage from './product';
import BlogPostPage from './blogpost';
import Navbar from '../container/Navbar';
import { DetailBlogpost } from '../container/BlogPosts/Partials';
import NotFound from './NotFound';


const HomePage = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<BlogPostPage />} />
        <Route path='/detail-blog/:id' element={<DetailBlogpost />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/youtube' element={<YoutubePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;
