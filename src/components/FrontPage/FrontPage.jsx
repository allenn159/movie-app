import React from "react";
import Vector from "./Search/Vector";
import SearchResults from "./Search/SearchResults";
import ScrollToTop from "react-scroll-to-top";

const FrontPage = ({ searchResults, setSearchResults }) => {
  return (
    <>
      <ScrollToTop color="#A239EA" smooth />
      <Vector setSearchResults={setSearchResults} />
      <SearchResults
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </>
  );
};

export default FrontPage;
