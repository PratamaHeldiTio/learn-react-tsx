import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YoutubePage from './pages/youtube';
import ProductPage from './pages/product';
import BlogPostPage from './pages/blogpost';
import Navbar from './container/Navbar';
import { DetailBlogpost } from './container/BlogPosts/Partials';
import NotFound from './pages/NotFound';


const HomePage = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<BlogPostPage />} />
        <Route path='/detail-blog/:id' element={<DetailBlogpost />} />
        <Route path='/product' element={<ProductPage />}>
          <Route path='terkini' element={<YoutubePage />} />
          <Route path='terkina' element={<ProductPage />} />
        </Route>
        <Route path='/youtube' element={<YoutubePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;
