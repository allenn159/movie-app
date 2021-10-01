import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawerBox: {
    width: "500px",
    [theme.breakpoints.down("md")]: {
      width: "250px",
    },
  },
  searchBar: {
    backgroundColor: "#A239EA",
    marginBottom: "10px",
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
    height: "350px",
    borderRadius: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  searchImgText: {
    fontFamily: "Arvo",
    textAlign: "center",
  },
  paper: {
    backgroundColor: "#E8F6EF",
    width: "450px",
    height: "675px",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "325px",
      height: "auto",
    },
  },
}));
