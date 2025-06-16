import React, { useRef, useState } from 'react';

const FunnyPage = () => {
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [clickedBox, setClickedBox] = useState<number | null>(null);

  const handleStart = () => {
    setShowContent(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleBoxClick = (index: number) => {
    setClickedBox(index);
    const audio = new Audio(`/sounds/effect${index + 1}.mp3`);
    audio.play();
  };

  return (
    <div className={showContent ? 'funny-page light' : 'funny-page dark'}>
      {!showContent && (
        <div className="intro-animation">
          {/* 👉 This image will move from right to left using CSS */}
          <img src="/images/furkan.png" alt="Furkan" className="moving-image" />
          <button className="start-button" onClick={handleStart}>
            What's going on?!
          </button>
        </div>
      )}

      {showContent && (
        <div className="main-content">
          <h1 className="starwars-text">Furkan’s power is back ⚡</h1>

          {/* 👉 3 clickable boxes with sound effects */}
          <div className="image-boxes">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="box"
                onClick={() => handleBoxClick(index)}
              >
                <img src={`/images/box${index + 1}.png`} alt={`Box ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* 👉 Laugh sound when the transition happens */}
          <audio ref={audioRef} src="/sounds/laugh.mp3" preload="auto" />
        </div>
      )}
    </div>
  );
};

export default FunnyPage;
