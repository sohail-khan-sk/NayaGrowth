import React from 'react';
import { Thermometer, Droplets, RotateCw, Smile, Wallet, ShieldCheck } from 'lucide-react';

const featuresList = [
  { icon: <Thermometer size={28} />, title: 'Temperature Control', desc: 'Precision heating ensures optimal hatching environment.' },
  { icon: <Droplets size={28} />, title: 'Humidity Control', desc: 'Maintains the exact moisture needed for healthy chicks.' },
  { icon: <RotateCw size={28} />, title: 'Automatic Egg Turning', desc: 'Mimics natural hen behavior without manual effort.' },
  { icon: <Smile size={28} />, title: 'Easy to Use', desc: 'Intuitive interface designed for anyone to operate.' },
  { icon: <Wallet size={28} />, title: 'Affordable Setup', desc: 'Accessible pricing at ~₹10,000 to get you started quickly.' },
  { icon: <ShieldCheck size={28} />, title: 'Farmer-Friendly Design', desc: 'Durable materials built to last in real farm conditions.' },
];

const Features = () => {
  return (
    <section id="features" className="section bg-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Everything You Need to Succeed</h2>
          <p className="section-subtitle">
            Advanced technology simplified for everyday use.
          </p>
        </div>
        
        <div className="grid-3">
          {featuresList.map((feature, index) => (
            <div key={index} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '4px' }}>
                {feature.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
