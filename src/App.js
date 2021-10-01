import React, { useState } from "react";
import { Header, FrontPage, MovieDetails, ComparePage } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [movieID, setMovieID] = useState("");

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <FrontPage
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              setMovieID={setMovieID}
            />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              movieID={movieID}
            />
          </Route>
          <Route exact path="/compare">
            <ComparePage
              setSearchResults={setSearchResults}
              searchResults={searchResults}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
