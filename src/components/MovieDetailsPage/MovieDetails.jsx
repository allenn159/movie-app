import React, { useEffect, useState } from "react";
import api from "../../api/index";
import SearchDrawer from "./SearchDrawer/SearchDrawer";
import { useHistory } from "react-router-dom";

import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  SwipeableDrawer,
} from "@material-ui/core";
import useStyles from "./styles";

import rt from "../../assets/rt.jpg";
import fresh from "../../assets/fresh.svg";
import splat from "../../assets/splat.svg";

const MovieDetails = ({ movieID, searchResults, setSearchResults }) => {
  const [movie, setMovie] = useState(null);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  let history = useHistory();

  const toggleDrawer = () => {
    setOpen(!open);
    setSearchResults(null);
  };

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

  if (!movieID) window.location.reload(history.push("/"));

  if (!movie) return "Loading...";

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container>
        <Grid className={classes.imageCont} item xs={12} md={6}>
          <img
            className={classes.image}
            src={movie.Poster.replace("SX300", "SX500")}
            alt="Movie Poster"
          />
        </Grid>
        <Grid className={classes.infoCont} item xs={12} md={6}>
          <Paper className={classes.paper}>
            <div className={classes.paperContent}>
              <Typography className={classes.movieTitle} variant="h5">
                {movie.Title} ({movie.Year})
              </Typography>
              <Typography className={classes.movieSummary} variant="h6">
                {movie.Plot}
              </Typography>
              <div>
                <p className={classes.movieCast}>Featuring: {movie.Actors}</p>
                <p>Rated: {movie.Rated}</p>
              </div>
              {movie.Ratings.filter((e) => e.Source === "Rotten Tomatoes").map(
                (el) => (
                  <div className={classes.ratingsContainer} key={el.Value}>
                    <img
                      className={classes.rtLogo}
                      src={rt}
                      alt="Rotten Tomatoe"
                    />
                    <p className={classes.rtScore}>{el.Value}</p>

                    {el.Value >= "50%" ? (
                      <img
                        className={classes.rtEmblem}
                        src={fresh}
                        alt="Fresh"
                      />
                    ) : (
                      <img
                        className={classes.rtEmblem}
                        src={splat}
                        alt="Splat"
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </Paper>
          <Button
            onClick={toggleDrawer}
            className={classes.button}
            variant="contained"
          >
            New Search
          </Button>
        </Grid>
      </Grid>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
      >
        <SearchDrawer
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          searchByID={searchByID}
          setMovie={setMovie}
          setOpen={setOpen}
        />
      </SwipeableDrawer>
    </Container>
  );
};

export default MovieDetails;
