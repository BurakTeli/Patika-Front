// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice'; 

export const store = configureStore({
  reducer: {
    game: gameReducer, // state.game ile erişilir
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
