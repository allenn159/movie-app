import React from "react";
import Search from "./Search/Search";
import SearchResults from "./Search/SearchResults";

const FrontPage = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchResults />
    </>
  );
};

export default FrontPage;
