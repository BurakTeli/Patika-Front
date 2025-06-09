// src/App.tsx
import React, { useReducer } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import PurchasedList from "./components/PurchasedList";
import {
  balanceReducer,
  initialState,
} from "./hooks/useBalanceReducer";
import { products } from "./data/products";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(balanceReducer, initialState);

  return (
    <div>
      <Navbar balance={state.balance} />
      <ProductList
        products={products}
        basket={state.basket}
        balance={state.balance}
        dispatch={dispatch}
      />
      <PurchasedList
        products={products}
        basket={state.basket}
      />
    </div>
  );
};

export default App;
