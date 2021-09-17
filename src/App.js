import React, { useState } from "react";
import { Header, FrontPage } from "./components";
import api from "../src/api/index";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // const onHandleSearch = (e) => {
  //   e.preventDefault();

  //   search(movie);
  // };

  // console.log(searchResults);

  return (
    <div className="App">
      <Header />
      <FrontPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
