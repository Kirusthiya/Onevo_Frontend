import React, { useEffect, useState } from 'react';
import './PremiumLoader.css';

interface ParticleProps {
  id: number;
  style: React.CSSProperties;
}

const PremiumLoader: React.FC = () => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    // Generate 15-20 random particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 60 + Math.random() * 40;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const size = 1 + Math.random() * 3;
      const duration = 1 + Math.random() * 2;
      const delay = Math.random() * 2;

      return {
        id: i,
        style: {
          left: '50%',
          top: '50%',
          width: `${size}px`,
          height: `${size}px`,
          '--x': `${x}px`,
          '--y': `${y}px`,
          animation: `float-particle ${duration}s ease-out ${delay}s infinite`,
        } as React.CSSProperties,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="premium-loader-container">
      <div className="loader-content">
        <div className="portal"></div>
        <div className="ring"></div>
        <div className="particles">
          {particles.map((p) => (
            <div key={p.id} className="particle" style={p.style}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumLoader;
