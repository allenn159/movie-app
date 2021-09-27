import React, { useEffect, useState } from "react";
import api from "../../api/index";
import { useHistory } from "react-router-dom";

import { Container, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

import rt from "../../assets/rt.jpg";
import fresh from "../../assets/fresh.svg";
import splat from "../../assets/splat.svg";

const MovieDetails = ({ movieID }) => {
  const [movie, setMovie] = useState(null);

  const classes = useStyles();
  let history = useHistory();

  const searchByID = async (id) => {
    const { data } = await api.get("/", {
      params: {
        i: id,
      },
    });
    setMovie(data);
  };

  useEffect(() => {
    searchByID(movieID);
  }, [movieID]);

  console.log(movie);

  if (!movieID) window.location.reload(history.push("/"));

  if (!movie) return "Loading...";

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container>
        <Grid item sm={6}>
          <img
            className={classes.image}
            src={movie.Poster.replace("SX300", "SX500")}
            alt="Movie Poster"
          />
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <div className={classes.paperContent}>
              <Typography className={classes.movieTitle} variant="h5">
                {movie.Title}
              </Typography>
              <Typography className={classes.movieSummary} variant="h6">
                {movie.Plot}
              </Typography>
              <div>
                <p>
                  <strong>Featuring: {movie.Actors}</strong>
                </p>
                <p>{movie.Year}</p>
              </div>
              {movie.Ratings.filter((e) => e.Source === "Rotten Tomatoes").map(
                (el) => (
                  <div key={el.Value}>
                    <img src={rt} alt="Rotten Tomatoe" />
                    <p>{el.Value}</p>
                    {el.Value >= "50%" ? (
                      <img src={fresh} alt="Fresh" />
                    ) : (
                      <img src={splat} alt="Splat" />
                    )}
                  </div>
                )
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
