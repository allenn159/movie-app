import React, { useState } from "react";
import { Header } from "./components";
import api from "../src/api/index";

import "./App.css";

function App() {
  // const [searchResults, setSearchResults] = useState([]);
  // const [movie, setMovie] = useState("");

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

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
