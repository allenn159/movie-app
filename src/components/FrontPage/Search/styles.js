import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
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
    height: 35,
    color: "white",
  },
  vectorCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A239EA",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  vector: {
    maxWidth: "100%",
    height: "auto",
  },
  vectorText: {
    fontFamily: "Arvo",
    color: "white",
    fontSize: "1.5rem",
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
    maxHeight: "400px",
    width: "auto",
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
