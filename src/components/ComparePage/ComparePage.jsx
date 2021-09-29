import React, { useState } from "react";
import LeftDrawer from "./LeftDrawer";
import {
  Container,
  Grid,
  Paper,
  Typography,
  SwipeableDrawer,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./styles";

const ComparePage = ({ setSearchResults, searchResults }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [leftMovie, setLeftMovie] = useState(null);
  const [rightMovie, setRightMovie] = useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
    setSearchResults(null);
  };

  console.log(leftMovie);

  return (
    <Container className={classes.cont} maxWidth="lg">
      <Grid container>
        <Grid
          className={!leftMovie ? classes.gridItem : classes.gridItem2}
          item
          xs={12}
          md={6}
        >
          {!leftMovie ? (
            <AddIcon
              onClick={toggleDrawer}
              className={classes.addIcon}
              style={{ fontSize: "50px" }}
            />
          ) : (
            <div>
              <Paper className={classes.paper}>
                <div className={classes.imgCont}>
                  <img
                    className={classes.img}
                    src={leftMovie.Poster.replace("SX300", "SX350")}
                  />
                  <Typography className={classes.movieTitleText} variant="h6">
                    {leftMovie.Title}
                  </Typography>
                  <div>
                    <p>Box Office: {leftMovie.BoxOffice}</p>
                    <p>Metascore: {leftMovie.Metascore}</p>
                    <p>IMDB Rating: {leftMovie.imdbRating}</p>
                    <p>IMDB Votes: {leftMovie.imdbVotes}</p>
                  </div>
                </div>
              </Paper>
            </div>
          )}
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6}>
          <AddIcon className={classes.addIcon} style={{ fontSize: "50px" }} />
        </Grid>
      </Grid>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
      >
        <LeftDrawer
          setSearchResults={setSearchResults}
          searchResults={searchResults}
          setLeftMovie={setLeftMovie}
          setOpen={setOpen}
        />
      </SwipeableDrawer>
    </Container>
  );
};

export default ComparePage;
