import React from "react";

import { Paper, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const LeftMovie = ({ leftMovie, setLeftMovie, toggleLeftDrawer }) => {
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
            <p className={classes.reviewText}>
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
