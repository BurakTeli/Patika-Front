import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Eğer thunk ile çalışılacaksa, bu satır da kullanılabilir
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  any
>;

export type AppThunkDispatch = ThunkDispatch<RootState, unknown, any>;
