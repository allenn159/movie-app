import React, { useState, useEffect } from "react";
import api from "../../../api/index";

import useStyles from "./styles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ setSearchResults, setLoading }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const search = async (term) => {
    setLoading(true);
    const { data } = await api.get("/", {
      params: {
        s: term,
      },
    });
    setSearchResults(data.Search);
    setLoading(false);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      search(searchTerm);
    }, 500);
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
          classes={{
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
