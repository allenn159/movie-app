import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Grow,
} from "@material-ui/core";
import useStyles from "./styles";

const SearchResults = ({ searchResults, setSearchResults, setMovieID }) => {
  const classes = useStyles();
  if (!searchResults) return null;

  const filteredArr = searchResults.filter(
    (v, i, a) =>
      a.findIndex((e) => e.imdbID === v.imdbID) === i && v.Poster !== "N/A"
  );

  const onHandleClick = (movieID) => {
    setMovieID(movieID);
    setSearchResults(null);
  };

  return (
    <>
      <Container className={classes.resultsCont} maxWidth="lg">
        <Grid container spacing={3}>
          {filteredArr.map((movie) => (
            // API has some duplicate results so using index as key.
            <Grid
              onClick={() => onHandleClick(movie.imdbID)}
              key={movie.imdbID}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <Link
                to={`/movie/${movie.imdbID}`}
                style={{ textDecoration: "none" }}
              >
                <Grow in>
                  <Card className={classes.card} variant="elevation">
                    <CardContent>
                      <img
                        className={classes.moviePoster}
                        src={movie.Poster}
                        alt={movie.Title}
                      />

                      <Typography className={classes.movieTitle}>
                        {movie.Title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SearchResults;
