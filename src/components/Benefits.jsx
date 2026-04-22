import React from 'react';

const benefits = [
  "More control for farmers",
  "Independence from external hatcheries",
  "Significant cost savings over time",
  "Simple, headache-free operations",
  "Better long-term income potential"
];

const Benefits = () => {
  return (
    <section className="section bg-primary" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}>
      <div className="container text-center">
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Why Hatch Your Own?</h2>
        <div style={{ maxWidth: '800px', margin: '40px auto 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '12px 24px', 
                borderRadius: '30px',
                fontWeight: '500',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
