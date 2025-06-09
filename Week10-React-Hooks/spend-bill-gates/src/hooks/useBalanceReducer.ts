// src/hooks/useBalanceReducer.ts

import type { Product } from "../data/products";

// Sepetteki ürün adedi
export interface Basket {
  [productId: number]: number;
}

// State tipi
export interface BalanceState {
  balance: number;
  basket: Basket;
}

// Action tipi
export type Action =
  | { type: "BUY"; payload: { product: Product } }
  | { type: "SELL"; payload: { product: Product } };

// Başlangıç bakiyesi
export const INITIAL_BALANCE = 100_000_000_000;

// Başlangıç state'i
export const initialState: BalanceState = {
  balance: INITIAL_BALANCE,
  basket: {},
};

// Reducer fonksiyonu
export function balanceReducer(
  state: BalanceState,
  action: Action
): BalanceState {
  switch (action.type) {
    case "BUY": {
      const { product } = action.payload;
      if (state.balance < product.price) return state; // Yetersiz bakiye
      return {
        balance: state.balance - product.price,
        basket: {
          ...state.basket,
          [product.id]: (state.basket[product.id] || 0) + 1,
        },
      };
    }
    case "SELL": {
      const { product } = action.payload;
      const currentCount = state.basket[product.id] || 0;
      if (currentCount <= 0) return state; // Ürün yoksa satılamaz
      return {
        balance: state.balance + product.price,
        basket: {
          ...state.basket,
          [product.id]: currentCount - 1,
        },
      };
    }
    default:
      return state;
  }
}
