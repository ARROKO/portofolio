import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from './GalleryImage';
import { NavigationDots } from './NavigationDots';
import { NavigationButton } from './NavigationButton';
import { FullscreenButton } from './FullscreenButton';
import { ImageModal } from './ImageModal';
import { useGalleryKeyboard } from './useGalleryKeyboard';
import { useGalleryAutoplay } from './useGalleryAutoplay';
import LazyImage from '../../LazyImage';

interface ProjectGalleryProps {
  screenshots: string[];
  type: 'personal' | 'professional';
}

const ProjectGallery = ({ screenshots, type }: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = screenshots.length - 1;
      if (nextIndex >= screenshots.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Keyboard navigation
  useGalleryKeyboard(paginate);
  
  // Autoplay (pauses on hover)
  useGalleryAutoplay(paginate);

  return (
    <section className="content-section my-20">
      <h2 className="text-4xl font-bold mb-12">Captures d'écran</h2>
      
      <div className="relative h-[400px] md:h-[600px] w-full group">
        {/* Main Gallery Container */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
          
          <AnimatePresence initial={false} custom={direction}>
            <GalleryImage
              key={currentIndex}
              src={screenshots[currentIndex]}
              direction={direction}
              index={currentIndex}
            />
          </AnimatePresence>
        </div>

        {/* Fullscreen Button */}
        <FullscreenButton
          onClick={() => setIsModalOpen(true)}
          type={type}
        />

        {/* Navigation Buttons */}
        <NavigationButton
          direction="left"
          onClick={() => paginate(-1)}
          type={type}
          icon={ChevronLeft}
        />
        <NavigationButton
          direction="right"
          onClick={() => paginate(1)}
          type={type}
          icon={ChevronRight}
        />

        {/* Preview Images - Hidden on mobile */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 gap-4 hidden md:flex">
          {screenshots.map((src, idx) => (
            <button
              key={src}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`relative h-20 w-32 rounded-lg overflow-hidden transition-all duration-300
                ${idx === currentIndex ? 'ring-2 ring-offset-4 ring-offset-[#1a1a2e]' : 'opacity-50 hover:opacity-75'}
                ${type === 'personal' ? 'ring-pink-500' : 'ring-blue-500'}`}
            >
              <LazyImage
                src={src}
                alt={`Preview ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Navigation Dots (Mobile) */}
        <div className="md:hidden">
          <NavigationDots
            total={screenshots.length}
            current={currentIndex}
            onChange={(idx) => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            type={type}
          />
        </div>

        {/* Fullscreen Modal */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          src={screenshots[currentIndex]}
        />
      </div>
    </section>
  );
};

export default ProjectGallery;