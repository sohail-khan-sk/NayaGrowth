import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Trust from './components/Trust';
import TargetAudience from './components/TargetAudience';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <Trust />
        <TargetAudience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
