import React, { useState } from "react";
import Vector from "./Search/Vector";
import SearchResults from "./Search/SearchResults";

const FrontPage = ({ searchResults, setSearchResults }) => {
  const [loading, setLoading] = useState(null);
  return (
    <>
      <Vector setSearchResults={setSearchResults} setLoading={setLoading} />
      <SearchResults searchResults={searchResults} loading={loading} />
    </>
  );
};

export default FrontPage;
