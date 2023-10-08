import axios from "axios";

const APIkey =
  "19e594278e50461a60a3b46a1c0222d9afe6b9351345a20f5403006bae1330ae";

const instance = axios.create({
  baseURL: "https://apiv3.apifootball.com",
});

export default instance;
