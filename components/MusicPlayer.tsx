
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Note: Autoplay is usually blocked. User must interact first.
    // This component will handle the state once started.
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Placeholder romantic track
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button
        onClick={toggleMusic}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 ${
          isPlaying ? 'bg-rose-500 text-white' : 'bg-white text-rose-500 border border-rose-100'
        }`}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        <span className="text-sm font-medium hidden md:inline">
          {isPlaying ? 'Music On' : 'Start Music'}
        </span>
      </button>
    </div>
  );
};

export default MusicPlayer;
