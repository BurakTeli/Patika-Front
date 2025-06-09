import React, { useReducer } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { balanceReducer, initialState } from "./hooks/useBalanceReducer";
import type { BalanceState } from "./hooks/useBalanceReducer";
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
      {/* Sepet ve alınanlar burada gösterilecek */}
    </div>
  );
};

export default App;
