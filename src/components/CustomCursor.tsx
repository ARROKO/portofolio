import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'button' | 'text'>('default');
  const [isClicking, setIsClicking] = useState(false);
  const rafRef = useRef<number>();

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isLink = target.closest('a') !== null;
      const isButton = target.closest('button, [role="button"], [onclick]') !== null;
      const isInput = target.closest('input, textarea, select') !== null;
      
      if (isLink) {
        setCursorType('link');
        setIsHovering(true);
      } else if (isButton) {
        setCursorType('button');
        setIsHovering(true);
      } else if (isInput) {
        setCursorType('text');
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
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateCursorPosition]);

  // Helper functions
  const getCursorScale = () => {
    switch (cursorType) {
      case 'link': return 1.4;
      case 'button': return 1.3;
      case 'text': return 1.2;
      default: return 1;
    }
  };

  const getCursorBorderColor = () => {
    switch (cursorType) {
      case 'link': return 'border-blue-400';
      case 'button': return 'border-purple-400';
      case 'text': return 'border-green-400';
      default: return 'border-white/30';
    }
  };

  const getCursorBgColor = () => {
    switch (cursorType) {
      case 'link': return 'bg-blue-400/10';
      case 'button': return 'bg-purple-400/10';
      case 'text': return 'bg-green-400/10';
      default: return 'bg-white/5';
    }
  };

  const getCursorIndicatorStyle = () => {
    switch (cursorType) {
      case 'link': return 'bg-blue-500/90 text-white border border-blue-400';
      case 'button': return 'bg-purple-500/90 text-white border border-purple-400';
      case 'text': return 'bg-green-500/90 text-white border border-green-400';
      default: return 'bg-gray-500/90 text-white border border-gray-400';
    }
  };

  const getCursorIcon = () => {
    switch (cursorType) {
      case 'link': return '↗';
      case 'button': return '●';
      case 'text': return '|';
      default: return '•';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !window.matchMedia('(max-width: 768px)').matches && (
        <>
          {/* Curseur principal - Point central avec effet de glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
              x: position.x - 4,
              y: position.y - 4,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
            transition={{
              type: "spring",
              stiffness: 1000,
              damping: 28,
              mass: 0.2,
            }}
          >
            <div className="relative w-full h-full">
              {/* Point central */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-60" />
            </div>
          </motion.div>
          
          {/* Anneau externe avec particules */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovering ? 0.8 : 0.4,
              scale: isClicking ? 0.9 : getCursorScale(),
              x: position.x - 20,
              y: position.y - 20,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998]"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 0.8,
            }}
          >
            <div className="relative w-full h-full">
              {/* Anneau principal */}
              <div className={`absolute inset-0 rounded-full border-2 ${getCursorBorderColor()} ${getCursorBgColor()}`} />
              
              {/* Particules orbitales */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i * 120) * Math.PI / 180) * 15,
                    y: Math.sin((i * 120) * Math.PI / 180) * 15,
                  }}
                  transition={{
                    rotate: {
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    x: { duration: 0 },
                    y: { duration: 0 }
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Indicateur de type d'interaction stylé */}
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: position.x - 16,
                y: position.y - 16,
              }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9997] flex items-center justify-center text-sm font-bold backdrop-blur-sm ${getCursorIndicatorStyle()}`}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
                mass: 0.4,
              }}
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: cursorType === 'link' ? [0, 15, 0] : [0, 0, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {getCursorIcon()}
              </motion.span>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;