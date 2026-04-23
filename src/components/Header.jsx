import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ onRequestDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-wrapper">
      <div className="header-glow-shape shape-1"></div>
      <div className="header-glow-shape shape-2"></div>
      
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="/" className="logo">
            Sere <span className="logo-accent">Innovations</span>
          </a>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#problem" onClick={() => setIsMenuOpen(false)}>The Challenge</a></li>
              <li><a href="#solution" onClick={() => setIsMenuOpen(false)}>Our Solution</a></li>
              <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
              <li>
                <button className="btn btn-primary nav-btn glass-btn" onClick={() => { setIsMenuOpen(false); onRequestDemo(); }}>
                  Request a Demo
                </button>
              </li>
            </ul>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
