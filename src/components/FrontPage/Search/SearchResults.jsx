import React, { useState, useMemo } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import api from "../../../api/index";

const SearchResults = ({ searchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);

  const search = async (term) => {
    const { data } = await api.get("/", {
      params: {
        s: term,
      },
    });
    setSearchResults(data.Search);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid>
          <Paper />
        </Grid>
      </Container>
    </>
  );
};

export default SearchResults;
