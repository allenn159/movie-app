import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    fontFamily: "Arvo",
    paddingTop: "25px",
  },
  imageCont: {
    textAlign: "center",
  },
  image: {
    borderRadius: "5px",
    maxHeight: "100vh",
    maxWidth: "90vw",
  },
  paper: {
    backgroundColor: "#E8F6EF",
  },
  paperContent: {
    padding: "25px",
  },
  infoCont: {
    [theme.breakpoints.down("md")]: {
      margin: "25px 0",
    },
  },
  movieTitle: {
    fontFamily: "Arvo",
    color: "#22577A",
    textAlign: "center",
  },
  movieSummary: {
    marginTop: "10px",
  },
  movieCast: {
    fontFamily: "Arvo",
    color: "#150050",
  },
  ratingsContainer: {
    display: "flex",
    alignItems: "center",
  },
  rtLogo: {
    borderRadius: "5px",
    marginRight: "10px",
  },
  rtScore: {
    flexGrow: 1,
  },
  rtEmblem: {
    maxWidth: "60px",
    height: "auto",
  },
}));
