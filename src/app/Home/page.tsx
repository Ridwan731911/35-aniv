"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [hearts, setHearts] = useState<number[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  const showHearts = () => {
    setIsClicked(true);
    setHearts([...Array(20).keys()]);
    setTimeout(() => {
      setHearts([]);
      setIsClicked(false);
    }, 3000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-sans">
      {/* Background Image */}
      <Image
        src="/27anivas.png"
        alt="Anniversary Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Teks Elegan */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-great-vibes mb-6 drop-shadow-xl text-pink-200"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Hallow Sayang
        </motion.h1>

        <button
          onClick={showHearts}
          className={`mt-8 font-semibold py-2 px-8 rounded-full shadow-lg transition-all duration-300 ${
            isClicked
              ? "bg-pink-600 text-white"
              : "bg-black text-white hover:bg-pink-600 hover:text-white"
          }`}
        >
          {isClicked ? "I Love You ❤️" : "Klik ya"}
        </button>

        <span className="mt-6 text-sm text-pink-200 italic">
          ❤️ 27 Agustus 2022 - 27 Juli 2024 ❤️
        </span>
      </div>

      {/* Floating Hearts */}
      {hearts.map((_, index) => (
        <Heart
          key={index}
          className="absolute text-pink-400 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80 + 10}%`,
            fontSize: `${Math.random() * 20 + 20}px`,
            opacity: 0.8,
          }}
        />
      ))}

      {/* Animasi CSS */}
      <style jsx>{`
        .animate-float {
          animation: floatUp 3s ease-in-out forwards;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
