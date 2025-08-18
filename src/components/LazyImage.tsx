import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  style,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);

  // Convertir les extensions d'images en WebP si possible
  const getOptimizedSrc = (originalSrc: string) => {
    // Si l'image est déjà en WebP, la retourner telle quelle
    if (originalSrc.includes('.webp')) {
      return originalSrc;
    }
    
    // Convertir les extensions communes en WebP
    const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpSrc;
  };

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    if (!imgRef.current || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [loading]);

  // Charger l'image quand elle est visible
  useEffect(() => {
    if (isInView && !imageSrc) {
      setImageSrc(getOptimizedSrc(src));
    }
  }, [isInView, src, imageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback vers l'image originale si WebP échoue
    if (imageSrc.includes('.webp')) {
      setImageSrc(src);
    } else {
      setIsLoaded(true);
    }
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, ...style }}
    >
      {/* Placeholder pendant le chargement */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-800/20 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-purple-400/50 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Image principale */}
      {isInView && imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={style}
        />
      )}
    </div>
  );
};

export default LazyImage;
