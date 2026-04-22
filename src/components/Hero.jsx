import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/egg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid-2">
        <div className="hero-content">
          <h1 className="hero-title">Helping Farmers Hatch Their <span className="text-primary">Own Future</span></h1>
          <p className="hero-subtitle">
            Hatch your own future with our simple, automated, and affordable smart incubators. 
            Built for real farmers, starting at just ~₹10,000.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Request a Demo <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#solution" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-bg"></div>
          <img src={heroImg} alt="Sere Innovations Smart Incubator" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
