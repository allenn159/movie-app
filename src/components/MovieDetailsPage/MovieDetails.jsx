import React, { useEffect } from "react";

const MovieDetails = ({ setSearchResults }) => {
  useEffect(() => {
    setSearchResults(null);
  }, []);

  return <div>Hello</div>;
};

export default MovieDetails;
