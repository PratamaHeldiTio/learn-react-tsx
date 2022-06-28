import React from 'react';
import Product from '../container/Product';
import { Outlet, Link } from 'react-router-dom';


const ProductPage = () => {
  return (
    <>
      <Product />
      <nav>
        <Link to="terkini">terkini</Link> | <Link to="terkina">terkina</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default ProductPage;