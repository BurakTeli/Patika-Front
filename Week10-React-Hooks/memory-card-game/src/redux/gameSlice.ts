// src/redux/gameSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dummy: true, // Geçici değer
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // geçici reducer
    example: (state) => {
      state.dummy = !state.dummy;
    },
  },
});

export const { example } = gameSlice.actions;
export default gameSlice.reducer;
