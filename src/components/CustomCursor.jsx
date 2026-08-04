import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Inner dot spring
  const dotX = useSpring(0, { damping: 45, stiffness: 750 });
  const dotY = useSpring(0, { damping: 45, stiffness: 750 });

  // Outer aura ring spring
  const ringX = useSpring(0, { damping: 25, stiffness: 220 });
  const ringY = useSpring(0, { damping: 25, stiffness: 220 });

  useEffect(() => {
    const moveCursor = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.spotlight-card') ||
        e.target.closest('.glass-card') ||
        e.target.closest('.badge-resend')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 180);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [dotX, dotY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring - Resend Precision Style */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--border-hover)] pointer-events-none z-[9999] hidden lg:block backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(255, 79, 0, 0.08)' : 'rgba(0, 0, 0, 0)',
          borderColor: isHovered ? '#ff4f00' : 'var(--border-hover)',
          boxShadow: isHovered ? '0 0 20px rgba(255, 79, 0, 0.35)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      />

      {/* Center Flame Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#ff4f00] rounded-full pointer-events-none z-[9999] hidden lg:block shadow-[0_0_10px_#ff4f00]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.6 : isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      />
    </>
  );
}
