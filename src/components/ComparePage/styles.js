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
  addIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  drawerBox: {
    width: "500px",
  },
  searchBar: {
    backgroundColor: "#A239EA",
  },
  imgCont: { textAlign: "center", padding: "20px" },
  img: {
    maxWidth: "200px",
    height: "300px",
    borderRadius: "10px",
  },
}));
