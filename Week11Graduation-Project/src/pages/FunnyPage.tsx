import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/FunnyPage.css";

const FunnyPage = () => {
  const navigate = useNavigate();

  // === State Definitions ===
  const [startAnimation, setStartAnimation] = useState(false); // Controls initial start animation
  const [blackout, setBlackout] = useState(false); // Manages screen blackout effect
  const [characterPhase, setCharacterPhase] = useState<
    "first" | "second" | "toretto" | "third" | "burak" | "kubra"
  >("first"); // Tracks which character or phase is currently active

  const [showToretto, setShowToretto] = useState(false); // Controls Toretto image visibility
  const [startExitToretto, setStartExitToretto] = useState(false); // Triggers Toretto exit animation
  const imageRef = useRef<HTMLImageElement | null>(null); // Ref for the first image animation

  const thirdAudioRef = useRef<HTMLAudioElement | null>(null); // Ref for audio to be triggered during 'third' phase

  // === Button click starts the animation and audio manually (user interaction required for autoplay) ===
  const handleStart = () => {
    setStartAnimation(true);

    // Audio initialized and played from 1:21 timestamp
    const audio = new Audio("/audio/4.mp3");
    audio.currentTime = 81;
    audio.volume = 0.3;
    audio.play();

    // Stop the audio after 21 seconds (matches image animation duration)
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 21000);
  };

  // === Handles transition from first image to Toretto entrance ===
  useEffect(() => {
    const image = imageRef.current;

    const handleTransitionEnd = () => {
      setBlackout(true); // Brief blackout effect after first image ends

      setTimeout(() => {
        setBlackout(false);
        setCharacterPhase("second"); // Move to Furkan_Teacher2

        setTimeout(() => {
          setShowToretto(true); // Show Toretto

          setTimeout(() => {
            setStartExitToretto(true); // Start Toretto exiting

            setTimeout(() => {
              setShowToretto(false); // Hide Toretto
              setCharacterPhase("third"); // Now show Furkan_Teacher3
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
  }, []);

  // === When Furkan_Teacher3 appears, play audio gradually louder and stop after animation ===
  useEffect(() => {
    if (characterPhase === "third") {
      if (thirdAudioRef.current) {
        thirdAudioRef.current.currentTime = 81;
        thirdAudioRef.current.volume = 0.3;
        thirdAudioRef.current.play();

        // Gradually increase the volume to 1
        let vol = 0.3;
        const interval = setInterval(() => {
          if (vol < 1 && characterPhase === "third") {
            vol += 0.05;
            thirdAudioRef.current!.volume = vol;
          } else {
            clearInterval(interval);
          }
        }, 1000);

        // After 21 seconds, pause audio and move to 'burak'
        setTimeout(() => {
          thirdAudioRef.current?.pause();
          thirdAudioRef.current!.currentTime = 0;
          setCharacterPhase("burak");
        }, 21000);
      }
    }
  }, [characterPhase]);

  // === After Burak appears, wait 4s then transition to Kübra, then navigate to race page ===
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
        {/* === First character slides in from right === */}
        {characterPhase === "first" && (
          <img
            ref={imageRef}
            src="/assets/images/Furkan_Teacher.png"
            alt="Furkan Teacher"
            className={`moving-image ${startAnimation ? "animate" : ""}`}
          />
        )}

        {/* === Static second character === */}
        {characterPhase === "second" && (
          <img
            src="/assets/images/Furkan_Teacher2.png"
            alt="Furkan Teacher 2"
            className="moving-image2"
          />
        )}

        {/* === Third character (plays music while moving) === */}
        {characterPhase === "third" && (
          <>
            <img
              src="/assets/images/Furkan_Teacher3.png" 
              alt="Furkan Teacher 3"
              className="moving-image3"
            />
            <audio ref={thirdAudioRef} src="/audio/4.mp3" />
          </>
        )}

        {/* === Burak enters from left === */}
        {characterPhase === "burak" && (
          <img
            src="/assets/images/Burak2.png"
            alt="Burak"
            className="burak-animation"
          />
        )}

        {/* === Kübra enters from left === */}
        {characterPhase === "kubra" && (
          <img
            src="/assets/images/Kubra.png"
            alt="Kübra"
            className="kubra-animation"
          />
        )}

        {/* === Toretto enters and exits screen === */}
        {showToretto && (
          <img
            src="/assets/images/Toretto.png"
            alt="Toretto"
            className={`toretto-image ${startExitToretto ? "exit" : "enter"}`}
          />
        )}

        {/* === Start button triggers all animations and sounds === */}
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
