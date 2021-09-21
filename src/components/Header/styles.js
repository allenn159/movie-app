import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: "#A239EA",
    position: "relative",
  },
  contents: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    margin: "0 5%",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Arvo",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
    },
  },
  menu: {
    color: "white",
    fontFamily: "Arvo",
    paddingLeft: "50px",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
