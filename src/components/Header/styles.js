import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    margin: "0 2%",
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "#FF4C29",
    fontFamily: "Architects Daughter",
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
    color: "#FF4C29",
    fontFamily: "Verdana",
    paddingLeft: "50px",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));
