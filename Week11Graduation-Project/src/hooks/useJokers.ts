import { useState } from "react";

type JokerType = "search" | "skip" | "eliminate";

export const useJokers = () => {
  const [usedJokers, setUsedJokers] = useState<Record<JokerType, boolean>>({
    search: false,
    skip: false,
    eliminate: false,
  });

  const useJoker = (type: JokerType, onTrigger: () => void) => {
    if (usedJokers[type]) {
      alert(`${type} jokeri zaten kullanıldı.`);
      return;
    }

    setUsedJokers((prev) => ({ ...prev, [type]: true }));
    onTrigger();
  };

  return {
    usedJokers,
    useJoker,
  };
};
