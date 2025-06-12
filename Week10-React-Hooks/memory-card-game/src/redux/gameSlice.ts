import { createSlice } from "@reduxjs/toolkit";

export interface CardType {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: CardType[];
  openedCards: number[];
  score: number;
  isGameFinished: boolean;
}

const initialState: GameState = {
  cards: [],
  openedCards: [],
  score: 0,
  isGameFinished: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setOpenedCards: (state, action) => {
      state.openedCards = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setGameFinished: (state, action) => {
      state.isGameFinished = action.payload;
    },
    flipCardDirectly: (state, action) => {
      const index = state.cards.findIndex(card => card.id === action.payload);
      if (index !== -1) {
        state.cards[index].isFlipped = true;
      }
    },
    setMatched: (state, action) => {
      action.payload.forEach((id: number) => {
        const index = state.cards.findIndex(card => card.id === id);
        if (index !== -1) {
          state.cards[index].isMatched = true;
        }
      });
    },
    resetGameState: (state) => {
      state.cards = [];
      state.openedCards = [];
      state.score = 0;
      state.isGameFinished = false;
    }
  },
});

export const {
  setCards,
  setOpenedCards,
  setScore,
  setGameFinished,
  flipCardDirectly,
  setMatched,
  resetGameState,
} = gameSlice.actions;

export default gameSlice.reducer;
