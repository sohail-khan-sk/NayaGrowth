import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="section bg-white text-center" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '40px' }}>Start Hatching on Your Own Terms</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.25rem' }}>
            Request a Demo <ArrowRight size={20} className="ml-2" />
          </button>
          <button className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.25rem' }}>
            Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
