import React, { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        drift: (Math.random() - 0.5) * 2,
      };
      return particle;
    };

    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push(createParticle());
      }
      setParticles(newParticles);
    };

    generateParticles();

    const interval = setInterval(() => {
      setParticles(prev => {
        const updated = prev.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + particle.drift * 0.5,
        })).filter(particle => particle.y > -10);

        // Add new particles occasionally
        if (Math.random() < 0.1) {
          updated.push(createParticle());
        }

        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDuration: `${8 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;