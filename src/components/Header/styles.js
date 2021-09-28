import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: "#A239EA",
  },
  contents: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    margin: "0 5%",
    [theme.breakpoints.down("sm")]: {
      alignItems: "baseline",
      margin: 0,
    },
  },
  title: {
    color: "white",
    fontFamily: "Arvo",
    textDecoration: "none",
    padding: "0 25px",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
      fontSize: "30px",
      padding: "0 10px",
    },
  },
  menu: {
    color: "white",
    fontFamily: "Arvo",
    padding: "0 25px",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
      padding: "0 10px",
    },
  },
}));
