import React from "react";

import { Paper, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const RightMovie = ({
  rightMovie,
  leftMovie,
  setRightMovie,
  toggleRightDrawer,
}) => {
  const classes = useStyles();

  const leftBO = parseInt(leftMovie?.BoxOffice.replace(/[^\w]/g, ""));
  const leftMS = parseInt(leftMovie?.Metascore.replace(/[^\w]/g, ""));
  const leftRating = parseInt(leftMovie?.imdbRating.replace(/[^\w]/g, ""));
  const rightBO = parseInt(rightMovie.BoxOffice.replace(/[^\w]/g, ""));
  const rightMS = parseInt(rightMovie.Metascore.replace(/[^\w]/g, ""));
  const rightRating = parseInt(rightMovie.imdbRating.replace(/[^\w]/g, ""));

  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.imgCont}>
          <img
            className={classes.img}
            src={rightMovie.Poster.replace("SX300", "SX350")}
            alt={rightMovie.Title}
          />
          <Typography className={classes.movieTitleText} variant="h6">
            {rightMovie.Title} ({rightMovie.Year})
          </Typography>
          <div>
            <p
              className={
                !leftMovie
                  ? classes.reviewText
                  : rightBO >= leftBO
                  ? classes.blue
                  : classes.red
              }
            >
              Box Office: {""}
              {!rightMovie.BoxOffice ? "N/A" : rightMovie.BoxOffice}
            </p>
            <p
              className={
                !leftMovie
                  ? classes.reviewText
                  : rightMS >= leftMS
                  ? classes.blue
                  : classes.red
              }
            >
              Metascore: {rightMovie.Metascore}
            </p>
            <p
              className={
                !leftMovie
                  ? classes.reviewText
                  : rightRating >= leftRating
                  ? classes.blue
                  : classes.red
              }
            >
              IMDB Rating: {rightMovie.imdbRating}
            </p>
          </div>
        </div>
      </Paper>
      <div className={classes.buttonCont}>
        <Button
          onClick={toggleRightDrawer}
          className={classes.searchNewBtn}
          variant="contained"
        >
          New Search
        </Button>
        <Button
          onClick={() => setRightMovie(null)}
          className={classes.removeBtn}
          variant="contained"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default RightMovie;
