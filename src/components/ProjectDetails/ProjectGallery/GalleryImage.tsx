import { motion } from 'framer-motion';

interface GalleryImageProps {
  src: string;
  direction: number;
  index: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1]
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
      ease: [0.32, 0.72, 0, 1]
    }
  })
};

export const GalleryImage = ({ src, direction, index }: GalleryImageProps) => (
  <motion.div
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    className="absolute inset-0"
  >
    <motion.img
      src={src}
      alt={`Screenshot ${index + 1}`}
      className="w-full h-full object-cover"
      layoutId={`image-${index}`}
      transition={{ duration: 0.6 }}
    />
  </motion.div>
);