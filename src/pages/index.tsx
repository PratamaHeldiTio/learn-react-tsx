import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YoutubePage from './youtube';
import ProductPage from './product';
import BlogPostPage from './blogpost';
import Navbar from '../container/Navbar';


const HomePage = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<BlogPostPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/youtube' element={<YoutubePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;
