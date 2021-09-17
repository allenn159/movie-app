import React, { useState } from "react";
import useStyles from "../styles";

import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ searchTerm, setSearchTerm }) => {
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
