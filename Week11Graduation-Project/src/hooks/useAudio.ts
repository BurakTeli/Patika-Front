import { useEffect, useRef } from "react";

type UseAudioOptions = {
  startTime?: number;
  volume?: number;
};

const useAudio = (
  src: string,
  options: UseAudioOptions = { startTime: 0, volume: 1 }
) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio init
  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src]);

  // Play
  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = options.startTime ?? 0;
    audio.volume = options.volume ?? 1;
    audio.play();
  };

  // Stop
  const stop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  };

  // Fade in
  const fadeIn = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.play();

    let vol = 0;
    const interval = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = Math.min(vol, 1);
      } else {
        clearInterval(interval);
      }
    }, 300);
  };

  // Fade out
  const fadeOut = () => {
    const audio = audioRef.current;
    if (!audio) return;

    let vol = audio.volume;
    const interval = setInterval(() => {
      if (vol > 0.05) {
        vol -= 0.05;
        audio.volume = Math.max(vol, 0);
      } else {
        clearInterval(interval);
        audio.pause();
        audio.currentTime = 0;
      }
    }, 300);
  };

  return { play, stop, fadeIn, fadeOut, audioRef };
};

export default useAudio;
