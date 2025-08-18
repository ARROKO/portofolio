import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'button'>('default');
  const rafRef = useRef<number>();

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isLink = target.closest('a, [role="button"], button') !== null;
      const isInteractive = target.closest('button, input, textarea, select, [tabindex], [onclick]') !== null;
      
      if (isLink) {
        setCursorType('link');
        setIsHovering(true);
      } else if (isInteractive) {
        setCursorType('button');
        setIsHovering(true);
      } else {
        setCursorType('default');
        setIsHovering(false);
      }
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
          {/* Curseur principal - Point central */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: cursorType === 'default' ? 1 : 0.8,
              scale: isHovering ? 0.5 : 1,
              x: position.x - 3,
              y: position.y - 3,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] shadow-lg"
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 35,
              mass: 0.3,
            }}
          />
          
          {/* Anneau externe - Suit avec délai */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovering ? 0.9 : 0.6,
              scale: cursorType === 'link' ? 2.5 : cursorType === 'button' ? 2 : 1.5,
              x: position.x - 16,
              y: position.y - 16,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border transition-colors duration-200 ${
              cursorType === 'link' 
                ? 'border-blue-400 bg-blue-400/10' 
                : cursorType === 'button'
                ? 'border-purple-400 bg-purple-400/10'
                : 'border-white/40 bg-white/5'
            }`}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 25,
              mass: 1.2,
            }}
          />
          
          {/* Indicateur de type d'interaction */}
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: position.x - 12,
                y: position.y - 12,
              }}
              exit={{ opacity: 0, scale: 0 }}
              className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9997] flex items-center justify-center text-xs font-bold ${
                cursorType === 'link'
                  ? 'bg-blue-500 text-white'
                  : 'bg-purple-500 text-white'
              }`}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.5,
              }}
            >
              {cursorType === 'link' ? '↗' : '•'}
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;