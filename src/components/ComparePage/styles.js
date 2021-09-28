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
    width: "250px",
  },
  searchBar: {
    backgroundColor: "#A239EA",
  },
}));
