import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ResumeDownload from './ResumeDownload';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="home" smooth={true} duration={500}>
          <span className="brand-text">Adnan Khan</span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <Link
                  className={`nav-link ${activeSection === link.to ? 'active' : ''}`}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-2">
              <ResumeDownload className="btn btn-resume">
                <i className="fas fa-download"></i> Resume
              </ResumeDownload>
            </li>
            <li className="nav-item ms-2">
              <button className="btn btn-theme-toggle" onClick={toggleTheme}>
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
