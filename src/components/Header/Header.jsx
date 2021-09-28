import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contents}>
        <Typography
          component={Link}
          to={"/"}
          className={classes.title}
          variant="h3"
        >
          Huntflix
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography
            component={Link}
            to={"/compare"}
            className={classes.menu}
            variant="h5"
          >
            Compare
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Header;
