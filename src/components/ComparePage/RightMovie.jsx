import React from "react";

import { Paper, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const RightMovie = ({ rightMovie, setRightMovie, toggleRightDrawer }) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.imgCont}>
          <img
            className={classes.img}
            src={rightMovie.Poster.replace("SX300", "SX350")}
          />
          <Typography className={classes.movieTitleText} variant="h6">
            {rightMovie.Title} ({rightMovie.Year})
          </Typography>
          <div>
            <p className={classes.reviewText}>
              Box Office: {""}
              {!rightMovie.BoxOffice ? "N/A" : rightMovie.BoxOffice}
            </p>
            <p className={classes.reviewText}>
              Metascore: {rightMovie.Metascore}
            </p>
            <p className={classes.reviewText}>
              IMDB Rating: {rightMovie.imdbRating}
            </p>
            <p className={classes.reviewText}>
              IMDB Votes: {rightMovie.imdbVotes}
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
