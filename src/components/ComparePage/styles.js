import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cont: {
    marginTop: "25px",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "600px",
  },
  gridItem2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  drawerBox: {
    width: "500px",
    [theme.breakpoints.down("md")]: {
      width: "250px",
    },
  },
  searchBar: {
    backgroundColor: "#A239EA",
    [theme.breakpoints.down("sm")]: {
      marginBottom: -50,
    },
  },
  imgCont: {
    textAlign: "center",
    padding: "10px",
  },
  searchImg: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  searchImgText: {
    fontFamily: "Arvo",
  },
  paper: { backgroundColor: "#E8F6EF", maxWidth: "450px" },
  img: {
    borderRadius: "10px",
    maxWidth: "100%",
    height: "auto",
    marginTop: "15px",
  },
  movieTitleText: {
    marginTop: "10px",
    fontFamily: "Arvo",
  },
}));
