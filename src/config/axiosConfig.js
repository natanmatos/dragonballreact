import Axios from "axios";

export const axios = Axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
