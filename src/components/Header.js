import React, { useState } from "react";
import logo from './Рисунок1.jpg'; // Update this path to your logo

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navBlock">
        <div className="logo-container">
          <img src={logo} alt="CRLD Logo" className="logo" />
          <h1 className="site-title">Center for Regional and Local Development</h1>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`nav-links ${isMenuOpen ? 'nav-links-mobile' : ''}`}>
          <a href="#about">About</a>
          <a href="#people">People</a>
          <a href="#research-tracks">Research Tracks</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
