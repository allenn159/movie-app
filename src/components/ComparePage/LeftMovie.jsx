import React from "react";

import { Paper, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const LeftMovie = ({
  leftMovie,
  rightMovie,
  setLeftMovie,
  toggleLeftDrawer,
}) => {
  const leftBO = leftMovie.BoxOffice.replace(/[^\w]/g, "");
  const leftMS = leftMovie.Metascore.replace(/[^\w]/g, "");
  const leftRating = leftMovie.imdbRating.replace(/[^\w]/g, "");
  const leftVotes = leftMovie.imdbVotes.replace(/[^\w]/g, "");
  const rightBO = rightMovie?.BoxOffice.replace(/[^\w]/g, "");
  const rightMS = rightMovie?.Metascore.replace(/[^\w]/g, "");
  const rightRating = rightMovie?.imdbRating.replace(/[^\w]/g, "");
  const rightVotes = rightMovie?.imdbVotes.replace(/[^\w]/g, "");

  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.imgCont}>
          <img
            className={classes.img}
            src={leftMovie.Poster.replace("SX300", "SX350")}
          />
          <Typography className={classes.movieTitleText} variant="h6">
            {leftMovie.Title} ({leftMovie.Year})
          </Typography>
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
            <p className={classes.reviewText}>
              Metascore: {leftMovie.Metascore}
            </p>
            <p className={classes.reviewText}>
              IMDB Rating: {leftMovie.imdbRating}
            </p>
            <p className={classes.reviewText}>
              IMDB Votes: {leftMovie.imdbVotes}
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
