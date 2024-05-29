import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full top-0">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/work">My Work</Link></li>
        <li><Link to="/contact">Connect</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
