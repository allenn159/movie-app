import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import MenuIcon from "@mui/icons-material/Menu";

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
          <TheatersIcon style={{ marginLeft: "10px" }} />
        </Typography>
        {/* <MenuIcon className={classes.menuIcon} /> */}
        <div style={{ display: "flex" }}>
          <Typography className={classes.menu} variant="h5">
            Compare
          </Typography>
          <Typography className={classes.menu} variant="h5">
            Rent
          </Typography>
          <Typography className={classes.menu} variant="h5">
            About
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Header;
