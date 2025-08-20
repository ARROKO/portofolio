import { useEffect, useState, useCallback, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>();

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
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



  // Vérifier si le curseur personnalisé est supporté
  const isCursorSupported = () => {
    try {
      // Vérifier si on est sur un appareil tactile
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return false;
      }
      
      // Vérifier si les animations CSS sont supportées
      const testElement = document.createElement('div');
      testElement.style.transform = 'translateX(0px)';
      if (!testElement.style.transform) {
        return false;
      }
      
      // Vérifier si requestAnimationFrame est disponible
      if (!window.requestAnimationFrame) {
        return false;
      }
      
      return true;
    } catch (error) {
      console.warn('Custom cursor not supported:', error);
      return false;
    }
  };

  return (
    <>
      {isVisible && !window.matchMedia('(max-width: 768px)').matches && isCursorSupported() && (
        <div
          className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
          style={{
            transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>
      )}
    </>
  );
};

export default CustomCursor;