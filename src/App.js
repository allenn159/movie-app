import React, { useState, useMemo } from "react";
import { Header, FrontPage, MovieDetails } from "./components";
import api from "../src/api/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useMemo(() => setSearchResults, [searchResults]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <FrontPage
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails setSearchResults={setSearchResults} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
