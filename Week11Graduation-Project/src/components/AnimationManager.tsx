// src/components/AnimationManager.tsx

import { useEffect } from "react";

type Phase = "first" | "second" | "toretto" | "third" | "burak" | "kubra";

interface Props {
  imageRef: React.RefObject<HTMLImageElement>;
  setCharacterPhase: React.Dispatch<React.SetStateAction<Phase>>;
  setShowToretto: React.Dispatch<React.SetStateAction<boolean>>;
  setStartExitToretto: React.Dispatch<React.SetStateAction<boolean>>;
  setBlackout: React.Dispatch<React.SetStateAction<boolean>>;
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
      image?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [imageRef, setCharacterPhase, setShowToretto, setStartExitToretto, setBlackout]);

  return null;
};

export default AnimationManager;
