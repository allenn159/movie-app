import React from "react";
import { Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TheatersIcon from "@material-ui/icons/Theaters";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contents}>
        <Typography className={classes.title} variant="h3">
          Huntflix
          <TheatersIcon style={{ marginLeft: "10px" }} />
        </Typography>
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
          />
        </div>
        <Typography className={classes.menu} variant="h5">
          Compare
        </Typography>
        <Typography className={classes.menu} variant="h5">
          Rent
        </Typography>
        <Typography className={classes.menu} variant="h5">
          About
        </Typography>
      </div>
      <img
        src="https://vectr.com/tmp/ce1sKO6Sb/b1iHLIBmOf.svg?width=500&height=531.2&select=b1iHLIBmOfpage0"
        alt="movie"
        className={classes.vector}
      />
    </div>
  );
};

export default Header;
