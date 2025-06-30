import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update trail positions
      setTrailPositions(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    const handleMouseEnter = (e) => {
      // Check if e.target is an Element before calling closest
      if (e.target instanceof Element) {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
          setIsHovering(true);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'scale-150' : ''}`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      
      {/* Cursor trail */}
      {trailPositions.map((pos, index) => (
        <div
          key={pos.id}
          className="custom-cursor-trail"
          style={{
            left: pos.x - 4,
            top: pos.y - 4,
            opacity: (index + 1) / trailPositions.length * 0.5,
            transform: `scale(${(index + 1) / trailPositions.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;