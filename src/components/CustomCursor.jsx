import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Inner dot spring (instant 60fps tracking)
  const dotX = useSpring(0, { damping: 50, stiffness: 800 });
  const dotY = useSpring(0, { damping: 50, stiffness: 800 });

  // Outer aura ring spring (smooth magnetic lag)
  const ringX = useSpring(0, { damping: 24, stiffness: 250 });
  const ringY = useSpring(0, { damping: 24, stiffness: 250 });

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
        e.target.closest('.glass-card') ||
        e.target.closest('.tag-pill')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [dotX, dotY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Magnetic Followers Aura Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-indigo-400/50 pointer-events-none z-50 hidden lg:block backdrop-blur-[1px] gpu-layer"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.7 : isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.12)' : 'rgba(99, 102, 241, 0)',
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.9)' : 'rgba(99, 102, 241, 0.45)',
          boxShadow: isHovered 
            ? '0 0 20px rgba(56, 189, 248, 0.4), inset 0 0 10px rgba(99, 102, 241, 0.2)' 
            : '0 0 10px rgba(99, 102, 241, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-sky-400 rounded-full pointer-events-none z-50 hidden lg:block shadow-[0_0_12px_#38bdf8] gpu-layer"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.8 : isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      />
    </>
  );
}
