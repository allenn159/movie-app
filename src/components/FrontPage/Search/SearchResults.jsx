import React from "react";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Grow,
} from "@material-ui/core";
import useStyles from "./styles";

const SearchResults = ({ searchResults }) => {
  const classes = useStyles();
  if (!searchResults) return null;

  const filteredArr = searchResults.filter(
    (v, i, a) =>
      a.findIndex((e) => e.imdbID === v.imdbID) === i && v.Poster !== "N/A"
  );

  console.log(filteredArr);
  return (
    <>
      <Container className={classes.resultsCont} maxWidth="lg">
        <Grid container spacing={3}>
          {filteredArr.map((movie) => (
            // API has some duplicate results so using index as key.
            <Grid key={movie.imdbID} item xs={4}>
              <Grow in>
                <Card className={classes.card} variant="elevation">
                  <CardContent>
                    <img className={classes.moviePoster} src={movie.Poster} />
                    <Typography className={classes.movieTitle}>
                      {movie.Title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SearchResults;
