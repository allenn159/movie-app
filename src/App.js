import React, { useState, useMemo } from "react";
import { Header, FrontPage } from "./components";
import api from "../src/api/index";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useMemo(() => setSearchResults, [searchResults]);

  return (
    <div className="App">
      <Header />
      <FrontPage
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </div>
  );
}

export default App;
