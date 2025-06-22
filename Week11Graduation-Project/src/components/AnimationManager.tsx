// src/components/AnimationManager.tsx

import { useEffect } from "react";

// 🔁 Animation phase types
type Phase = "first" | "second" | "toretto" | "third" | "burak" | "kubra";

interface Props {
  imageRef: React.RefObject<HTMLImageElement>;             // 🎯 Reference to the animated image
  setCharacterPhase: React.Dispatch<React.SetStateAction<Phase>>; // 🌀 Set phase of the character
  setShowToretto: React.Dispatch<React.SetStateAction<boolean>>;  // 🚘 Toggle Toretto visibility
  setStartExitToretto: React.Dispatch<React.SetStateAction<boolean>>; // ⛔ Trigger Toretto exit
  setBlackout: React.Dispatch<React.SetStateAction<boolean>>;      // 🌑 Toggle blackout screen
}

const AnimationManager: React.FC<Props> = ({
  imageRef,
  setCharacterPhase,
  setShowToretto,
  setStartExitToretto,
  setBlackout,
}) => {
  useEffect(() => {
    const image = imageRef.current;

    // 🧠 Callback: Runs after first image finishes its transition
    const handleTransitionEnd = () => {
      setBlackout(true); // 🌑 Start blackout transition

      setTimeout(() => {
        setBlackout(false);         // 🌕 End blackout
        setCharacterPhase("second"); // 🧍 Move to next character phase

        setTimeout(() => {
          setShowToretto(true);      // 🚘 Show Toretto character

          setTimeout(() => {
            setStartExitToretto(true); // ↩️ Start exit animation

            setTimeout(() => {
              setShowToretto(false);     // ❌ Hide Toretto
              setCharacterPhase("third"); // 🧍 Move to next phase
            }, 1000);
          }, 3000);
        }, 2000);
      }, 2000);
    };

    // 🚨 Attach transitionend listener
    if (image) {
      image.addEventListener("transitionend", handleTransitionEnd);
    }

    // 🧹 Clean up on component unmount
    return () => {
      image?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [imageRef, setCharacterPhase, setShowToretto, setStartExitToretto, setBlackout]);

  return null; // 🧼 This component handles logic only, does not render UI
};

export default AnimationManager;
