import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const rafRef = useRef<number>();

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    // Utiliser requestAnimationFrame pour des performances optimales
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isTargetPointer = window.getComputedStyle(target).cursor === 'pointer';
      const isMotionLink = target.closest('a') !== null;
      
      setIsPointer(isTargetPointer);
      setIsLinkHovered(isMotionLink);
    });
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateCursorPosition]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: isPointer || isLinkHovered ? 1.5 : 1,
              x: position.x - 8,
              y: position.y - 8,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: isPointer || isLinkHovered ? 1.5 : 1,
              x: position.x - 14,
              y: position.y - 14,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 w-7 h-7 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
              mass: 0.8,
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;