import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const header = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
};

export default header;
