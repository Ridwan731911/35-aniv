"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HalamanKedua() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-sans">
      {/* Background Image */}
      <Image
        src="/gambar2.png"
        alt="Background Love"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Konten Tengah */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-great-vibes mb-6 drop-shadow-xl text-pink-200"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Untuk Kamu Sayang Part 3
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
          className="px-10 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg rounded-full font-semibold transition-all shadow-lg"
        >
          Buka ya 💌
        </motion.button>
      </div>

      {/* Modal Ucapan */}
      {/* Modal Ucapan */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white/10 backdrop-blur-3xl border border-pink-300/30 p-6 md:p-10 rounded-3xl shadow-2xl max-w-2xl text-white text-left"
            >
              {/* Decorative Accents */}
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-pink-400 rounded-full blur-xl opacity-30" />
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-pink-600 rounded-full blur-2xl opacity-20" />

              {/* Tombol Close */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-white hover:text-pink-300 transition"
              >
                <X size={24} />
              </button>

              {/* Isi Pesan */}
              <div className="text-center">
                <h2
                  className="text-3xl md:text-4xl font-great-vibes text-pink-200 mb-6 drop-shadow"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  💖Sayangku💖
                </h2>

                <p className="text-pink-100 text-base md:text-lg leading-relaxed mb-6">
                  Makasih banyak iyaa syang aku udah slalu ada buat aku support
                  aku maafin aku iyaa syang aku bnyak salah ke ayang buat bt
                  buat marah marah ayang maafin juga belum bisa mengasih apa apa
                  syang aku janji de nyusul hadianya sayang
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/Moment")}
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-base rounded-full font-semibold transition-all shadow-md"
                >
                  Klik Moment
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
