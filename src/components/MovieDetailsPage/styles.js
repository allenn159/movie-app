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
    maxWidth: "100%",
    height: "auto",
  },
  paper: {
    backgroundColor: "#E8F6EF",
  },
  paperContent: {
    padding: "25px",
  },
  infoCont: {
    [theme.breakpoints.down("sm")]: {
      margin: "25px 0",
    },
  },
  movieTitle: {
    fontFamily: "Arvo",
    color: "#22577A",
    textAlign: "center",
  },
  movieSummary: {
    marginTop: "20px",
  },
  movieCast: {
    fontFamily: "Arvo",
    fontWeight: 700,
    color: "#22577A",
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
  button: {
    marginTop: "10px",
    backgroundColor: "#A239EA",
    color: "#fff",
    fontFamily: "Lato",
    width: "100%",
  },
}));
