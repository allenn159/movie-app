import React from "react";
import Search from "../FrontPage/Search/Search";

import { Box, List, ListItem } from "@material-ui/core";
import useStyles from "./styles";

const LeftDrawer = ({ setSearchResults }) => {
  const classes = useStyles();
  return (
    <Box className={classes.drawerBox}>
      <div className={classes.searchBar}>
        <Search setSearchResults={setSearchResults} />
      </div>
      <List></List>
    </Box>
  );
};

export default LeftDrawer;
