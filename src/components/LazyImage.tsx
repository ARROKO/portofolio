'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

// We extend Next.js ImageProps but keep the interface name for compatibility
interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  className?: string;
  containerClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  className,
  containerClassName,
  alt,
  src,
  width,
  height,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // If width/height are not provided, we assume fill mode
  // But we must ensure the parent has dimensions if fill is used.
  // The original LazyImage allowed optional width/height.
  const isFill = !width && !height;

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-white/5", 
        // Default to full size if fill is used, otherwise fit content
        isFill ? "w-full h-full" : "inline-block",
        containerClassName || className
      )}
    >
      {/* Shimmer Effect Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={isFill}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-xl grayscale opacity-0" : "scale-100 blur-0 grayscale-0 opacity-100",
          // If fill is used, we usually want object-cover, but let user override
          isFill ? "object-cover" : "",
          // If the user passed className, we apply it to the image too if it's not a container class
          // ideally className should be on the wrapper for layout, and image specific styles on image
          // But for compatibility with old <img className="..."> we apply it here too if needed, 
          // though applying it to wrapper is usually safer for layout.
          // Let's apply it to the image for now as that's what the old component did.
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export default LazyImage;

