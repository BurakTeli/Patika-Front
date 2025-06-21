import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAudio from "../hooks/useAudio"; // hook dosyan buraya eklendi
import "../styles/pages/FunnyPage.css";

const FunnyPage = () => {
  const navigate = useNavigate();

  const [startAnimation, setStartAnimation] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const [characterPhase, setCharacterPhase] = useState<
    "first" | "second" | "toretto" | "third" | "burak" | "kubra"
  >("first");

  const [showToretto, setShowToretto] = useState(false);
  const [startExitToretto, setStartExitToretto] = useState(false);

  // ✅ imageRef güvenli şekilde tanımlandı
  const imageRef = useRef<HTMLImageElement | null>(null);

  // ✅ audio hook'undan gelen ref ve fonksiyonlar
  const {
    play,
    stop,
    fadeIn,
    fadeOut,
    audioRef: thirdAudioRef,
  } = useAudio("/audio/4.mp3", { startTime: 81, volume: 0.3 });

  // === Başlatma ===
  const handleStart = () => {
    setStartAnimation(true);
    play();
    setTimeout(() => stop(), 21000);
  };

  useEffect(() => {
    const image = imageRef.current;

    const handleTransitionEnd = () => {
      setBlackout(true);

      setTimeout(() => {
        setBlackout(false);
        setCharacterPhase("second");

        setTimeout(() => {
          setShowToretto(true);

          setTimeout(() => {
            setStartExitToretto(true);

            setTimeout(() => {
              setShowToretto(false);
              setCharacterPhase("third");
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
  }, []);

  // === third fazında müzik fadeIn ile başlat
  useEffect(() => {
    if (characterPhase === "third") {
      fadeIn();

      setTimeout(() => {
        fadeOut();
        setCharacterPhase("burak");
      }, 21000);
    }
  }, [characterPhase, fadeIn, fadeOut]);

  useEffect(() => {
    if (characterPhase === "burak") {
      setTimeout(() => {
        setCharacterPhase("kubra");

        setTimeout(() => {
          navigate("/race");
        }, 4000);
      }, 4000);
    }
  }, [characterPhase, navigate]);

  return (
    <div className="funny-page light">
      {blackout && <div className="blackout-screen" />}

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
          <>
            <img
              src="/assets/images/Furkan_Teacher3.png"
              alt="Furkan Teacher 3"
              className="moving-image3"
            />
            {/* hook'tan gelen audioRef buraya takıldı */}
            <audio ref={thirdAudioRef} />
          </>
        )}

        {characterPhase === "burak" && (
          <img
            src="/assets/images/Burak2.png"
            alt="Burak"
            className="burak-animation"
          />
        )}

        {characterPhase === "kubra" && (
          <img
            src="/assets/images/Kubra.png"
            alt="Kübra"
            className="kubra-animation"
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
    </div>
  );
};

export default FunnyPage;
