import React, { useState, useEffect } from "react";
import Search from "./Search";

import useStyles from "./styles";

const Vector = ({ setSearchResults, setLoading }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.vectorCont}>
        <img
          src="https://vectr.com/tmp/ce1sKO6Sb/b1iHLIBmOf.svg?width=500&height=531.2&select=b1iHLIBmOfpage0"
          alt="movie"
          className={classes.vector}
        />
        <div>
          <p className={classes.vectorText}>Search your favorite movies...</p>
          <Search setSearchResults={setSearchResults} setLoading={setLoading} />
        </div>
      </div>
    </>
  );
};

export default Vector;
