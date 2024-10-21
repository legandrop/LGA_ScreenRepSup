import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type ImageViewerProps = {
  images: { src: string; alt: string }[];
  initialIndex: number;
  width: number;
  height: number;
  basePath: string;
};

export default function ImageViewer({ images, initialIndex, width, height, basePath }: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const fullSrc = `${basePath}${images[currentIndex].src}`;

  const formatAltText = (text: string) => {
    const phrases = [
      'Plate Principal:',
      'Plate Ref A:',
      'Plate Ref B:',
      'Plate Ref C:',
      'Plate Reflejo:'
    ];

    let formattedText = text;
    phrases.forEach(phrase => {
      formattedText = formattedText.replace(
        new RegExp(`(${phrase})`, 'g'),
        '<strong>$1</strong>'
      );
    });

    return formattedText;
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const closeViewer = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeViewer();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, nextImage, prevImage, closeViewer]);

  const arrowStyle = {
    textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0px 0px 4px rgba(0,0,0,0.5)',
    fontSize: '6rem',
    fontWeight: 'bold',
  };

  return (
    <>
      <Image
        src={fullSrc}
        alt={images[currentIndex].alt}
        width={width}
        height={height}
        className="result-image cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeViewer}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={fullSrc}
                alt={images[currentIndex].alt}
                width={1000}
                height={1000}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button
                className="absolute top-0 right-4 text-white text-6xl font-bold hover:text-gray-300 transition-colors duration-200"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0px 0px 4px rgba(0,0,0,0.5)',
                }}
                onClick={closeViewer}
              >
                ×
              </button>
              <div 
                className="absolute top-5 left-5 text-white text-xl bg-black bg-opacity-50 p-2 rounded z-10"
                dangerouslySetInnerHTML={{ __html: formatAltText(images[currentIndex].alt) }}
              />
              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                    style={arrowStyle}
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  >
                    &#8592;
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                    style={arrowStyle}
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  >
                    &#8594;
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
