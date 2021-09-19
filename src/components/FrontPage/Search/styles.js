import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
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
    color: "white",
  },
  vectorCont: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#A239EA",
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
  resultsCont: {
    marginTop: "20px",
  },
  card: {
    textAlign: "center",
    backgroundColor: "#E8F6EF",
  },
  moviePoster: {
    textAlign: "center",
    height: "45vh",
    borderRadius: "10px",
    marginTop: "10px",
  },
  movieTitle: {
    fontFamily: "Arvo",
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginTop: "10px",
  },
}));