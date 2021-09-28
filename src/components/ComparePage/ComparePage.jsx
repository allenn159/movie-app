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

  const toggleDrawer = () => {
    setOpen(!open);
    setSearchResults(null);
  };

  return (
    <Container className={classes.cont} maxWidth="lg">
      <Grid container>
        <Grid className={classes.gridItem} item xs={12} lg={6}>
          <AddIcon
            onClick={toggleDrawer}
            className={classes.addIcon}
            style={{ fontSize: "50px" }}
          />
        </Grid>
        <Grid className={classes.gridItem} item xs={12} lg={6}>
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
        />
      </SwipeableDrawer>
    </Container>
  );
};

export default ComparePage;
