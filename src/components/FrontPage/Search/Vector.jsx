import React, { useState, useEffect } from "react";
import Search from "./Search";
import VectorIcon from "../../../assets/vector.svg";

import useStyles from "./styles";

const Vector = ({ setSearchResults, setLoading }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.vectorCont}>
        <img src={VectorIcon} className={classes.vector} />
        <div>
          <p className={classes.vectorText}>Search your favorite movies...</p>
          <Search setSearchResults={setSearchResults} setLoading={setLoading} />
        </div>
      </div>
    </>
  );
};

export default Vector;
