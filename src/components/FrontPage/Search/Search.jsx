import React, { useState, useEffect, useMemo } from "react";
import api from "../../../api/index";

import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "../styles";

const Search = ({ setSearchResults }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const search = async (term) => {
    const { data } = await api.get("/", {
      params: {
        s: term,
      },
    });
    setSearchResults(data.Search);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm);
      search(searchTerm);
    }, 500);
    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [searchTerm]);

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
