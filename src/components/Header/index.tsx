import React from 'react';
import logo from '/assets/icons/logo.svg';
import arrow from '/assets/icons/trending_flat.svg';

const Navbar = () => {
  return (
    <header className="w-full h-28 px-5">
      <nav className="h-full flex items-center justify-between container">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
