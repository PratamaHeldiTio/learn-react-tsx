import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarStyled } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/youtube">Youtube</Link>
    </NavbarStyled>
  );
};

export default Navbar;
