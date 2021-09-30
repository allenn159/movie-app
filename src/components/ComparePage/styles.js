import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cont: {
    marginTop: "15px",
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
  paper: {
    backgroundColor: "#E8F6EF",
    maxWidth: "350px",
    height: "auto",
  },
  imgCont: {
    textAlign: "center",
    padding: "10px 20px",
  },
  img: {
    borderRadius: "10px",
    maxWidth: "100%",
    height: "auto",
    marginTop: "15px",
  },
  movieTitleText: {
    margin: "10px 10% 0 10%",
    fontFamily: "Arvo",
  },
  reviewText: {
    fontFamily: "Arvo",
  },
  buttonCont: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchNewBtn: {
    backgroundColor: "#A239EA",
    color: "#fff",
    fontFamily: "Lato",
    fontSize: "15px",
    fontWeight: 700,
    height: "40px",
    width: "48%",
  },
  removeBtn: {
    backgroundColor: "#F55C47",
    color: "#fff",
    fontFamily: "Lato",
    fontSize: "15px",
    fontWeight: 700,
    height: "40px",
    width: "48%",
  },
}));
