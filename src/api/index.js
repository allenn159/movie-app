import axios from "axios";

const KEY = `${process.env.REACT_APP_API_KEY}`;

export default axios.create({
  baseURL: "https://omdbapi.com/",
  params: {
    apikey: KEY,
  },
});
