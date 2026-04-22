import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/egg_machine.png';

const Solution = () => {
  return (
    <section id="solution" className="section bg-white">
      <div className="container grid-2">
        <div style={{ order: 2 }}>
          <img 
            src={heroImg} 
            alt="Sere Innovations Automated System" 
            style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} 
          />
        </div>
        
        <div style={{ order: 1 }}>
          <h2 className="section-title">Meet Your Smart Hatching Partner</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '30px' }}>
            Sere Innovations brings you an intelligent incubator designed specifically for the needs of real farmers.
          </p>
          
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <CheckCircle2 size={24} className="text-primary" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '4px' }}>Incredibly Easy to Use</h4>
                <p style={{ color: 'var(--text-light)' }}>No technical knowledge required. Plug it in, set it, and let it work.</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <CheckCircle2 size={24} className="text-primary" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '4px' }}>Fully Automated System</h4>
                <p style={{ color: 'var(--text-light)' }}>From temperature control to egg turning, it handles the complex parts for you.</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <CheckCircle2 size={24} className="text-primary" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '4px' }}>Built for Real Farmers</h4>
                <p style={{ color: 'var(--text-light)' }}>Durable, reliable, and designed to withstand practical farm environments.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Solution;
