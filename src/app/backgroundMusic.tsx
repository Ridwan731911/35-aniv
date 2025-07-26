'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Awalnya false, tidak autoplay

  useEffect(() => {
    const audio = new Audio('/music/lagu.mp3');
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Gagal play musik:', err));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleAudio}
        className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
      >
        {isPlaying ? '🔇 Matikan Musik' : '🔊 Hidupkan Musik'}
      </button>
    </div>
  );
}
