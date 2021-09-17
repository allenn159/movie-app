import React from "react";
import Search from "./Search/Search";
import SearchResults from "./Search/SearchResults";

const FrontPage = ({ searchResults, setSearchResults }) => {
  return (
    <>
      <Search setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults} />
    </>
  );
};

export default FrontPage;
