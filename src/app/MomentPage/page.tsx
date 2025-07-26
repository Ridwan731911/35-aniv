'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/moment/1.jpg',
  '/moment/2.jpg',
  '/moment/8.jpg',
  '/moment/3.jpg',
  '/moment/4.jpg',
  '/moment/5.jpg',
  '/moment/6.jpg',
  '/moment/7.jpg',
];

export default function MomentPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % images.length;
    });
  };

  const goPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return images.length - 1;
      return (prev - 1 + images.length) % images.length;
    });
  };

  return (
    <main className="relative min-h-screen text-white">
      {/* Background Image */}
      <Image
        src="/27anivas.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-pink-900/40 backdrop-blur-sm z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-pink-200 mb-10 font-great-vibes drop-shadow-lg">
          Momen-Momen Indah Kita 💞
        </h1>

        {/* Decorative Glow */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-400 blur-2xl opacity-30 rounded-full z-0"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-600 blur-3xl opacity-30 rounded-full z-0"></div>

        {/* Grid Foto */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative cursor-pointer group overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={src}
                alt={`Moment ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Foto */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full px-4"
            >
              {/* Tombol Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white hover:text-pink-400 z-50"
              >
                <X size={32} />
              </button>

              {/* Tombol Navigasi */}
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 z-50"
              >
                <ChevronLeft size={40} />
              </button>

              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 z-50"
              >
                <ChevronRight size={40} />
              </button>

              {/* Gambar Full */}
              <div className="flex justify-center">
                <Image
                  src={images[selectedIndex]}
                  alt={`Full ${selectedIndex + 1}`}
                  width={1000}
                  height={600}
                  className="max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
