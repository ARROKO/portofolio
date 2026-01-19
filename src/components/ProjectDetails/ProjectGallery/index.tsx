'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ImageModal } from './ImageModal';
import LazyImage from '../../LazyImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

interface ProjectGalleryProps {
  screenshots: string[];
  type: 'personal' | 'professional';
}

const ProjectGallery = ({ screenshots, type }: ProjectGalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Early return if no screenshots
  if (!screenshots || screenshots.length === 0) return null;

  const primaryColor = type === 'personal' ? 'text-pink-500' : 'text-blue-500';
  const ringColor = type === 'personal' ? 'ring-pink-500' : 'ring-blue-500';
  const gradientColor = type === 'personal' ? 'from-pink-500 to-purple-500' : 'from-blue-500 to-cyan-500';

  return (
    <section className="content-section my-20">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">Captures d'écran</h2>
        <div className="hidden md:flex gap-2">
          <button className="swiper-button-prev-custom p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="relative h-[300px] md:h-[500px] w-full group rounded-2xl overflow-hidden bg-[#0a0a1a]/50 border border-white/5">
        
        {/* Main Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full w-full"
        >
          {screenshots.map((src, idx) => (
            <SwiperSlide key={`${src}-${idx}`}>
              <div className="relative w-full h-full">
                <LazyImage
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  className="w-full h-full object-contain bg-black/40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fullscreen Trigger */}
        <button
          onClick={() => setIsModalOpen(true)}
          className={`absolute top-4 right-4 z-20 p-2 md:p-3 rounded-full bg-black/40 backdrop-blur-md 
            border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            hover:bg-black/60 ${primaryColor}`}
        >
          <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
        </button>

      </div>

      {/* Thumbnails Slider (Desktop only) */}
      <div className="mt-6 hidden md:block">
        <Swiper
          modules={[Thumbs, FreeMode]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          spaceBetween={16}
          slidesPerView="auto"
          freeMode={true}
          className="thumbs-swiper px-1"
        >
          {screenshots.map((src, idx) => (
            <SwiperSlide key={`thumb-${src}-${idx}`} className="!w-32 !h-20 cursor-pointer">
              <div 
                className={`w-full h-full rounded-lg overflow-hidden border-2 transition-all duration-300 relative
                  ${activeIndex === idx ? `${ringColor} opacity-100 scale-105` : 'border-transparent opacity-50 hover:opacity-75'}`}
              >
                <LazyImage
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                 {activeIndex === idx && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradientColor} opacity-20 mix-blend-overlay`} />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fullscreen Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={screenshots[activeIndex]}
      />

      <style>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: ${type === 'personal' ? '#ec4899' : '#3b82f6'} !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default ProjectGallery;