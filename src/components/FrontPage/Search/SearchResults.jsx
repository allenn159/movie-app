import React, { useState } from "react";

import { Container, Grid, Card, Typography } from "@material-ui/core";

const SearchResults = ({ searchResults, loading }) => {
  if (!searchResults) return null;

  const filteredArr = searchResults.filter(
    (v, i, a) => a.findIndex((t) => t.imdbID === v.imdbID) === i
  );

  console.log(filteredArr);
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          {filteredArr.map((movie) => (
            // API has some duplicate results so using index as key.
            <Grid key={movie.imdbID} item xs={4}>
              <Card variant="elevation">
                <img src={movie.Poster} />
                <Typography>{movie.Title}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SearchResults;
