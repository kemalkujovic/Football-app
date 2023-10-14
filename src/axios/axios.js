import axios from "axios";

const APIkey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: "https://apiv3.apifootball.com",
});

export default instance;
