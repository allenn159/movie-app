import React, { useState, useEffect } from "react";
import api from "../../../api/index";

import useStyles from "./styles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ setSearchResults }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const search = async (term) => {
    const { data } = await api.get("/", {
      params: {
        s: term,
        type: "movie",
      },
    });
    setSearchResults(data.Search);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // trim cuts out any empty space after the search term.
      search(searchTerm.trim());
    }, 400);
    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [searchTerm]);

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          className={classes.inputInput}
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
