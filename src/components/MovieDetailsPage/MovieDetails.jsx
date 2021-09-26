import React, { useEffect, useState } from "react";
import api from "../../api/index";

import { Container, Grid } from "@material-ui/core";
import useStyles from "./styles";

const MovieDetails = ({ setSearchResults, movieID }) => {
  const [movie, setMovie] = useState({});
  const classes = useStyles();

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

  if (!movieID) return "Loading...";
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item lg={6}>
          Sup
        </Grid>
        <Grid item lg={6}>
          Sup
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
