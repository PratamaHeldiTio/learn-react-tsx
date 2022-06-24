import React from 'react';
// import Youtube from "../../components/Youtube";
// import Product from "../Product";
import BlogPosts from '../BlogPosts';

const Home = () => {
  return (
    <>
      {/* <Youtube 
        time="5.04" 
        title="React dasar part 1" 
        desc="2x ditonton. 2 hari yang lalu" 
      />
      <Youtube 
        time="35.44" 
        title="React dasar part 2"
        desc="20x ditonton. 3 hari yang lalu"
      />
      <Youtube 
        time="24.24" 
        title="React dasar part 3"
        desc="2k ditonton. 10 hari yang lalu"
      />
      <Youtube 
        time="6.34" 
        title="React dasar part 4"
        desc="11x ditonton. 1 hari yang lalu"
      />
      <Youtube />

      <h1>Product</h1>
      <hr />
      <Product /> */}

      <BlogPosts />
    </>
  );
};

export default Home;
