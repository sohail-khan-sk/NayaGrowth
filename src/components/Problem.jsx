import React from 'react';
import { Store, TrendingDown, Clock, AlertTriangle } from 'lucide-react';

const problems = [
  {
    title: 'Hatchery Dependence',
    description: 'Relying on external hatcheries means you operate on their schedule, not yours.',
    icon: <Store size={32} className="text-primary" />
  },
  {
    title: 'High Initial Costs',
    description: 'Buying day-old chicks continually eats into your profit margins.',
    icon: <TrendingDown size={32} className="text-primary" />
  },
  {
    title: 'Unpredictable Cycles',
    description: 'Lack of control over hatching cycles makes planning difficult.',
    icon: <Clock size={32} className="text-primary" />
  },
  {
    title: 'Operational Headaches',
    description: 'Transport stress and low quality chicks lead to higher mortality rates.',
    icon: <AlertTriangle size={32} className="text-primary" />
  }
];

const Problem = () => {
  return (
    <section id="problem" className="section bg-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">The Real Challenges You Face</h2>
          <p className="section-subtitle">
            We understand the hurdles small poultry farmers deal with every day. It's time for a change.
          </p>
        </div>
        
        <div className="grid-4">
          {problems.map((problem, index) => (
            <div key={index} className="card text-center" style={{ padding: '40px 20px' }}>
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '16px', backgroundColor: 'rgba(45, 90, 39, 0.1)', borderRadius: '50%' }}>
                  {problem.icon}
                </div>
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{problem.title}</h3>
              <p style={{ color: 'var(--text-light)' }}>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
