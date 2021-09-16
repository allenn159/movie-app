import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    height: "30em",
    backgroundColor: "#A239EA",
    position: "relative",
  },
  contents: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Arvo",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    marginLeft: "50px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: 35,
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
    },
    color: "white",
  },
  menu: {
    color: "white",
    fontFamily: "Arvo",
    paddingLeft: "50px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  vector: {
    position: "absolute",
    right: 0,
    top: 250,
    [theme.breakpoints.down("lg")]: {},
  },
}));
