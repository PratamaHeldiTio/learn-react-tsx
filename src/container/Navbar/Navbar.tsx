import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.style.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/youtube">Youtube</Link>
    </nav>
  );
};

export default Navbar;
