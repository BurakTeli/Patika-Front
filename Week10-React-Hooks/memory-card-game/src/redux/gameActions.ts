import { AppDispatch, RootState } from "./store";
import {
  setCards,
  resetGameState,
  setOpenedCards,
  setScore,
  setMatched,
  setGameFinished,
  flipCardDirectly,
} from "./gameSlice";

// 🟢 Oyun başladığında kartları oluşturur
const initialImages = [
  "react", "vue", "angular", "svelte", "redux", "node",
  "html", "css", "git", "github", "ts", "js"
];

export const initGameThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch(resetGameState());

    const duplicated = [...initialImages, ...initialImages, "extra"]; // 12 çift + 1 tek = 25 kart
    const shuffled = duplicated
      .map((img, index) => ({
        id: index,
        image: img,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    dispatch(setCards(shuffled));
  };
};

// 🟡 Kart tıklanınca çalışır: açma, eşleşme kontrolü, skor, oyun bitişi
export const flipCardThunk = (cardId: number) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState().game;

    const selectedCard = state.cards.find((c) => c.id === cardId);
    if (!selectedCard || selectedCard.isFlipped || selectedCard.isMatched) return;

    dispatch(flipCardDirectly(cardId));

    const updatedOpened = [...state.openedCards, cardId];
    dispatch(setOpenedCards(updatedOpened));

    // 2 kart açıldıysa eşleşme kontrolü başlasın
    if (updatedOpened.length === 2) {
      const [firstId, secondId] = updatedOpened;
      const firstCard = state.cards.find((c) => c.id === firstId);
      const secondCard = state.cards.find((c) => c.id === secondId);

      if (!firstCard || !secondCard) return;

      setTimeout(() => {
        const currentState = getState().game;

        if (firstCard.image === secondCard.image) {
          dispatch(setMatched([firstId, secondId]));
          dispatch(setScore(currentState.score + 50));
        } else {
          dispatch(setScore(Math.max(0, currentState.score - 10)));
        }

        dispatch(setOpenedCards([]));

        // Tüm kartlar eşleşti mi?
        const allMatched = currentState.cards.every((c) => c.isMatched);
        if (allMatched) {
          dispatch(setGameFinished(true));
        }
      }, 1000); // 1 saniye animasyon gecikmesi
    }
  };
};
