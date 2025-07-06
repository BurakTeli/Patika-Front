import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="appContainer">
      <div className="content">
        <h1 className="appTitle">Star Wars Starships</h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>
    </div>
  );
};

export default App;
