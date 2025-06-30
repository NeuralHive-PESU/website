import { useEffect, useRef } from 'react';

export const useTilt = (options = {}) => {
  const ref = useRef(null);

  const defaultOptions = {
    max: 15,
    speed: 400,
    glare: false,
    'max-glare': 1,
    scale: 1.05,
    ...options,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * defaultOptions.max;
      const rotateY = ((centerX - x) / centerX) * defaultOptions.max;

      element.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(${defaultOptions.scale}, ${defaultOptions.scale}, ${defaultOptions.scale})
      `;
      element.style.transition = 'none';
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      element.style.transition = `transform ${defaultOptions.speed}ms ease-out`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [defaultOptions]);

  return ref;
};

export default useTilt;