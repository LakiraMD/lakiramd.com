import React, { useState } from 'react';

function Navbar() {
  const [isToggeleOpen, setIsToggeleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openClose = () => {
    setIsToggeleOpen(!isToggeleOpen);
  };

  const setScrolled = () => {
    if (window.scrollY >= 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', setScrolled);

  return (
    <header className={`${isScrolled ? 'scrolling-active' : null} header`}>
      <nav className="navbar">
        <ul className={`${isToggeleOpen && 'open'} nav-menu`} id="navMenu">
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li> */}
          <li className="nav-item">
            <a href="#blog" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`${isToggeleOpen && 'open'} hamburger`}
          onClick={openClose}
          id="hamburger"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
