import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header bg-white">
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
              <a href="#contact" className="btn btn-primary nav-btn" onClick={() => setIsMenuOpen(false)}>
                Request a Demo
              </a>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
