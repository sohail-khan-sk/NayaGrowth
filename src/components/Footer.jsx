import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light" style={{ padding: '40px 0 20px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div className="logo" style={{ marginBottom: '10px' }}>
          Sere <span className="logo-accent">Innovations</span>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', color: 'var(--text-light)' }}>
          <a href="#" style={{ hover: 'var(--primary-color)' }}>About</a>
          <a href="#contact" style={{ hover: 'var(--primary-color)' }}>Contact</a>
          <a href="tel:+910000000000">+91 000 000 0000</a>
          <a href="mailto:hello@sereinnovations.com">hello@sereinnovations.com</a>
        </div>
        
        <div style={{ marginTop: '20px', color: 'var(--text-light)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Sere Innovations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
