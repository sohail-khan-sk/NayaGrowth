import React from 'react';
import { User, Users, Briefcase, MapPin } from 'lucide-react';

const audiences = [
  { title: 'Small Poultry Farmers', icon: <User size={24} /> },
  { title: 'Rural Entrepreneurs', icon: <Briefcase size={24} /> },
  { title: 'First-time Starters', icon: <Users size={24} /> },
  { title: 'Local Farm Operators', icon: <MapPin size={24} /> },
];

const TargetAudience = () => {
  return (
    <section className="section bg-light text-center">
      <div className="container">
        <h2 className="section-title">Who Is This For?</h2>
        <div className="grid-4" style={{ marginTop: '40px' }}>
          {audiences.map((audience, index) => (
            <div key={index} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--secondary-color)' }}>
                {audience.icon}
              </div>
              <h4 style={{ fontSize: '1.125rem' }}>{audience.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
