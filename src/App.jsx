import React, { useState } from 'react';
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
import DemoModal from './components/DemoModal';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => setIsDemoModalOpen(true);
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);
  return (
    <div className="app">
      <Header onRequestDemo={handleOpenDemoModal} />
      <main>
        <Hero onRequestDemo={handleOpenDemoModal} />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <Trust />
        <TargetAudience />
        <FinalCTA onRequestDemo={handleOpenDemoModal} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}

export default App;
