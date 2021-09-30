import React from "react";

import { Paper, Button } from "@material-ui/core";
import useStyles from "./styles";

const LeftMovie = ({
  leftMovie,
  rightMovie,
  setLeftMovie,
  toggleLeftDrawer,
}) => {
  const classes = useStyles();

  const leftBO = parseInt(leftMovie.BoxOffice.replace(/[^\w]/g, ""));
  const leftMS = parseInt(leftMovie.Metascore.replace(/[^\w]/g, ""));
  const leftRating = parseInt(leftMovie.imdbRating.replace(/[^\w]/g, ""));
  const rightBO = parseInt(rightMovie?.BoxOffice.replace(/[^\w]/g, ""));
  const rightMS = parseInt(rightMovie?.Metascore.replace(/[^\w]/g, ""));
  const rightRating = parseInt(rightMovie?.imdbRating.replace(/[^\w]/g, ""));

  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.imgCont}>
          <img
            className={classes.img}
            src={leftMovie.Poster.replace("SX300", "SX350")}
            alt={leftMovie.Title}
          />
          <p className={classes.movieTitleText}>
            {leftMovie.Title} ({leftMovie.Year})
          </p>
          <div>
            <p
              className={
                !rightMovie
                  ? classes.reviewText
                  : leftBO >= rightBO
                  ? classes.green
                  : classes.red
              }
            >
              Box Office: {""}
              {!leftMovie.BoxOffice ? "N/A" : leftMovie.BoxOffice}
            </p>
            <p
              className={
                !rightMovie
                  ? classes.reviewText
                  : leftMS >= rightMS
                  ? classes.green
                  : classes.red
              }
            >
              Metascore: {leftMovie.Metascore}
            </p>
            <p
              className={
                !rightMovie
                  ? classes.reviewText
                  : leftRating >= rightRating
                  ? classes.green
                  : classes.red
              }
            >
              IMDB Rating: {leftMovie.imdbRating}
            </p>
          </div>
        </div>
      </Paper>
      <div className={classes.buttonCont}>
        <Button
          onClick={toggleLeftDrawer}
          className={classes.searchNewBtn}
          variant="contained"
        >
          New Search
        </Button>
        <Button
          onClick={() => setLeftMovie(null)}
          className={classes.removeBtn}
          variant="contained"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default LeftMovie;
