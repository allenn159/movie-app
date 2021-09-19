import React, { useState, useMemo } from "react";
import { Header, FrontPage } from "./components";
import api from "../src/api/index";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const search = async (term) => {
  //   const { data } = await api.get("/", {
  //     params: {
  //       s: term,
  //     },
  //   });
  //   setSearchResults(data.Search);
  // };

  // const onHandleSearch = (e) => {
  //   e.preventDefault();

  //   search(movie);
  // };

  // console.log(searchResults);

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
