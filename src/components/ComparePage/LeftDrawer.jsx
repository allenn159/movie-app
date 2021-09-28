import React from "react";
import Search from "../FrontPage/Search/Search";

import { Box, Grid } from "@material-ui/core";
import useStyles from "./styles";

const LeftDrawer = ({ setSearchResults, searchResults }) => {
  const classes = useStyles();

  const filteredArr = searchResults?.filter(
    (v, i, a) =>
      a.findIndex((e) => e.imdbID === v.imdbID) === i && v.Poster !== "N/A"
  );

  return (
    <Box className={classes.drawerBox}>
      <div className={classes.searchBar}>
        <Search setSearchResults={setSearchResults} />
      </div>
      <Grid container>
        {filteredArr?.map((e) => (
          <Grid key={e.imdbID} item lg={6}>
            <div className={classes.imgCont}>
              <img className={classes.img} src={e.Poster} />
              <p>{e.Title}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LeftDrawer;
