import React, { useEffect, useState } from "react";
import api from "../../api/index";
import { useHistory } from "react-router-dom";

import { Container, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

import rt from "../../assets/rt.jpg";

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
  }, []);

  console.log(movie);

  if (!movieID) history.push("/");
  if (!movie) return "Loading...";

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item sm={6}>
          <img src={movie.Poster.replace("SX300", "SX500")} />
          <Typography variant="h5">{movie.Title}</Typography>
        </Grid>
        <Grid item sm={6}>
          <Paper>
            <Typography variant="h5">{movie.Plot}</Typography>
            <div>
              <p>Featuring: {movie.Actors}</p>
              <p>{movie.Year}</p>
            </div>
            {/* <div>
              <img src={rt} />
              {movie.Ratings[1].Value}
            </div> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
