import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cont: {
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
      marginTop: "5px",
    },
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
    height: "350px",
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
    width: "450px",
    height: "675px",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "325px",
      height: "auto",
    },
  },
  imgCont: {
    textAlign: "center",
    padding: "10px",
  },
  img: {
    borderRadius: "10px",
    maxWidth: "100%",
    height: "450px",
    marginTop: "15px",
  },
  movieTitleText: {
    marginTop: "15px",
    fontSize: "20px",
    fontFamily: "Arvo",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  reviewText: {
    fontFamily: "Arvo",
    fontSize: "18px",
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
  green: {
    fontFamily: "Arvo",
    fontSize: "18px",
    color: "#0E49B5",
  },
  red: {
    fontFamily: "Arvo",
    fontSize: "18px",
    color: "#FF0000",
  },
}));
