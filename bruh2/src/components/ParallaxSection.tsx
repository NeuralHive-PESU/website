import React, { useEffect, useRef } from 'react';

const ParallaxSection = ({ children, className = '', speed = 0.5 }) => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        bgRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section ref={sectionRef} className={`parallax-section ${className}`}>
      <div ref={bgRef} className="parallax-bg" />
      <div className="parallax-content">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;