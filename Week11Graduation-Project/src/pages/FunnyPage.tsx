import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleStart = () => {
    setStartAnimation(true);
    audioRef.current?.play();
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

              // Furkan_Teacher3 bitince Burak başlar
              setTimeout(() => {
                setCharacterPhase("burak");

                // Burak bitince Kübra başlar
                setTimeout(() => {
                  setCharacterPhase("kubra");

                  // Kübra bitince sayfa yönlendirmesi
                  setTimeout(() => {
                    navigate("/race");
                  }, 4000); // Kübra çıkışı süresi
                }, 4000); // Burak çıkışı süresi
              }, 3500); // Furkan_Teacher3 çıkışı sonrası bekleme
            }, 1000);
          }, 3000);
        }, 2000);
      }, 2000);
    };

    if (image) {
      image.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      image?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [navigate]);

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
          <img
            src="/assets/images/Furkan_Teacher3.png"
            alt="Furkan Teacher 3"
            className="moving-image3"
          />
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

      <audio ref={audioRef} src="/sounds/laugh.mp3" preload="auto" />
    </div>
  );
};

export default FunnyPage;
