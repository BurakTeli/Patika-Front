import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/FunnyPage.css";

const FunnyPage = () => {
  const navigate = useNavigate();

  const [startAnimation, setStartAnimation] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const [characterPhase, setCharacterPhase] = useState<"first" | "second" | "toretto" | "third">("first");
  const [showToretto, setShowToretto] = useState(false);
  const [startExitToretto, setStartExitToretto] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleStart = () => {
    setStartAnimation(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const image = imageRef.current;

    const handleTransitionEnd = () => {
      setBlackout(true);

      setTimeout(() => {
        setBlackout(false);
        setCharacterPhase("second");

        // Toretto sahnesi başlatılır
        setTimeout(() => {
          setShowToretto(true);

          // 3 saniye sonra Toretto kaybolur ve karakter değişir
          setTimeout(() => {
            setStartExitToretto(true);

            // Toretto çıkarken Furkan_Teacher3'e geçiş ve sağa kayma
            setTimeout(() => {
              setShowToretto(false);
              setCharacterPhase("third");

              // Animasyonlar bittikten sonra yönlendirme
              setTimeout(() => {
                navigate("/race"); // Doğru sayfa yolu "/race"
              }, 1500); // Furkan_Teacher3 animasyonunun tamamlanma süresi
            }, 1000);
          }, 3000);
        }, 2000);
      }, 2000);
    };

    if (image) {
      image.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (image) {
        image.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [navigate]);

  return (
    <div className="funny-page light">
      {blackout && <div className="blackout-screen"></div>}

      <div className="intro-animation">
        {characterPhase === "first" && (
          <img
            ref={imageRef}
            src="/assets/images/Furkan_Teacher.png"
            alt="Furkan Teacher"
            className={`moving-image ${startAnimation ? "animate" : ""}`}
          />
        )}

        {characterPhase === "second" && (
          <img
            src="/assets/images/Furkan_Teacher2.png"
            alt="Furkan Teacher 2"
            className="moving-image2"
          />
        )}

        {characterPhase === "third" && (
          <img
            src="/assets/images/Furkan_Teacher3.png"
            alt="Furkan Teacher 3"
            className="moving-image3"
          />
        )}

        {showToretto && (
          <img
            src="/assets/images/Toretto.png"
            alt="Toretto"
            className={`toretto-image ${startExitToretto ? "exit" : "enter"}`}
          />
        )}

        {characterPhase === "first" && !startAnimation && (
          <button className="start-button" onClick={handleStart}>
            What's going on?!
          </button>
        )}
      </div>

      <audio ref={audioRef} src="/sounds/laugh.mp3" preload="auto" />
    </div>
  );
};

export default FunnyPage;
