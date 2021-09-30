import React, { useState, useEffect } from "react";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";
import LeftMovie from "./LeftMovie";

import {
  Container,
  Grid,
  Paper,
  Typography,
  SwipeableDrawer,
  Button,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./styles";

const ComparePage = ({ setSearchResults, searchResults }) => {
  const classes = useStyles();
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [leftMovie, setLeftMovie] = useState(null);
  const [rightMovie, setRightMovie] = useState(null);

  const toggleLeftDrawer = () => {
    setOpenLeft(!openLeft);
    setSearchResults(null);
  };

  const toggleRightDrawer = () => {
    setOpenRight(!openRight);
    setSearchResults(null);
  };

  console.log(leftMovie);

  useEffect(() => {
    setSearchResults(null);
  }, []);

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
              onClick={toggleLeftDrawer}
              className={classes.addIcon}
              style={{ fontSize: "50px" }}
            />
          ) : (
            <LeftMovie
              leftMovie={leftMovie}
              setLeftMovie={setLeftMovie}
              toggleDrawer={toggleLeftDrawer}
            />
          )}
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6}>
          <AddIcon
            onClick={toggleRightDrawer}
            className={classes.addIcon}
            style={{ fontSize: "50px" }}
          />
        </Grid>
      </Grid>
      <SwipeableDrawer
        anchor={"left"}
        open={openLeft}
        onOpen={toggleLeftDrawer}
        onClose={toggleLeftDrawer}
      >
        <LeftDrawer
          setSearchResults={setSearchResults}
          searchResults={searchResults}
          setLeftMovie={setLeftMovie}
          setOpenLeft={setOpenLeft}
        />
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor={"right"}
        open={openRight}
        onOpen={toggleRightDrawer}
        onClose={toggleRightDrawer}
      >
        <RightDrawer
          setRightMovie={setRightMovie}
          setSearchResults={setSearchResults}
          searchResults={searchResults}
          setOpenRight={setOpenRight}
        />
      </SwipeableDrawer>
    </Container>
  );
};

export default ComparePage;
