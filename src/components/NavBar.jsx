import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const NavBar = ({ toggleTheme, isDarkMode }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full top-0 flex justify-between items-center">
      <div className="flex space-x-4">
        <button onClick={toggleTheme} className="text-white">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={() => handleNavigation('/')} className="text-white">Home</button>
        <button onClick={() => handleNavigation('/aboutMe')} className="text-white">About Me</button>
        <button onClick={() => handleNavigation('/myWork')} className="text-white">My Work</button>
        <button onClick={() => handleNavigation('/talkBox')} className="text-white">TalkBox</button>
        <button onClick={() => handleNavigation('/skills')} className="text-white">Skills</button>
      </div>
    </nav>
  );
};

export default NavBar;
