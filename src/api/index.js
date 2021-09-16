import axios from "axios";

const KEY = "b747e67e";

export default axios.create({
  baseURL: "http://omdbapi.com/",
  params: {
    apikey: KEY,
  },
});
