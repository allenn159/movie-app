import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: "#A239EA",
  },
  contents: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    margin: "0 5%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  title: {
    color: "white",
    fontFamily: "Arvo",
    textDecoration: "none",
    padding: "0 25px",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
    },
  },
  menu: {
    color: "white",
    fontFamily: "Arvo",
    padding: "0 30px",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
