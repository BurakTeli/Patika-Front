import React, { useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import PurchasedList from "./components/PurchasedList";
import IcardiModal from "./components/IcardiModal";
import {
  balanceReducer,
  initialState,
} from "./hooks/useBalanceReducer";
import { products } from "./data/products";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(balanceReducer, initialState);
  const [showIcardiVideo, setShowIcardiVideo] = useState(false);

  return (
    <div>
      <Navbar balance={state.balance} />
      <ProductList
        products={products}
        basket={state.basket}
        balance={state.balance}
        dispatch={dispatch}
        onIcardiClick={() => setShowIcardiVideo(true)}
      />
      <PurchasedList
        products={products}
        basket={state.basket}
      />
      <IcardiModal open={showIcardiVideo} onClose={() => setShowIcardiVideo(false)} />
    </div>
  );
};

export default App;
