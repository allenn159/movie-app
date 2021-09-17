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
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Arvo",
  },
  menu: {
    color: "white",
    fontFamily: "Arvo",
    paddingLeft: "50px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  vectorCont: {
    display: "flex",
    alignItems: "center",
  },
  vector: {
    marginLeft: "20%",
    [theme.breakpoints.down("lg")]: {},
  },
  vectorText: {
    fontFamily: "Arvo",
    color: "white",
    fontSize: "1.5em",
  },
}));
