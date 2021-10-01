import React from "react";
import Search from "../FrontPage/Search/Search";
import api from "../../api/index";

import { Box, Grid, Grow } from "@material-ui/core";
import useStyles from "./styles";

const RightDrawer = ({
  setSearchResults,
  searchResults,
  setRightMovie,
  setOpenRight,
}) => {
  const classes = useStyles();

  const filteredArr = searchResults?.filter(
    (v, i, a) =>
      a.findIndex((e) => e.imdbID === v.imdbID) === i && v.Poster !== "N/A"
  );

  const searchByID = async (id) => {
    const { data } = await api.get("/", {
      params: {
        i: id,
      },
    });
    setRightMovie(data);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  const onClickHandler = (id) => {
    searchByID(id);
    setOpenRight(false);
    setSearchResults(null);
    scrollUp();
  };

  return (
    <Box className={classes.drawerBox}>
      <div className={classes.searchBar}>
        <Search setSearchResults={setSearchResults} />
      </div>
      <Grid container>
        {filteredArr?.map((e) => (
          <Grid key={e.imdbID} item xs={12} lg={6}>
            <Grow in>
              <div className={classes.imgCont}>
                <img
                  onClick={() => onClickHandler(e.imdbID)}
                  className={classes.searchImg}
                  src={e.Poster}
                  alt={e.Title}
                />
                <p className={classes.searchImgText}>{e.Title}</p>
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RightDrawer;
