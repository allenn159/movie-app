import React, { useState, useEffect } from "react";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";
import LeftMovie from "./LeftMovie";
import RightMovie from "./RightMovie";

import { Container, Grid, SwipeableDrawer } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./styles";

const ComparePage = ({ setSearchResults, searchResults }) => {
  const classes = useStyles();
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [leftMovie, setLeftMovie] = useState(null);
  const [rightMovie, setRightMovie] = useState(null);

  const toggleLeftDrawer = () => {
    setOpenLeft((openLeft) => !openLeft);
    setSearchResults(null);
  };

  const toggleRightDrawer = () => {
    setOpenRight((openRight) => !openRight);
    setSearchResults(null);
  };

  useEffect(() => {
    setSearchResults(null);
  }, [setSearchResults]);

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
              rightMovie={rightMovie}
              setLeftMovie={setLeftMovie}
              toggleLeftDrawer={toggleLeftDrawer}
            />
          )}
        </Grid>
        <Grid
          className={!rightMovie ? classes.gridItem : classes.gridItem2}
          item
          xs={12}
          md={6}
        >
          {!rightMovie ? (
            <AddIcon
              onClick={toggleRightDrawer}
              className={classes.addIcon}
              style={{ fontSize: "50px" }}
            />
          ) : (
            <RightMovie
              rightMovie={rightMovie}
              leftMovie={leftMovie}
              setRightMovie={setRightMovie}
              toggleRightDrawer={toggleRightDrawer}
            />
          )}
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
