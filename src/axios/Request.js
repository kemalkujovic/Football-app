const APIkey =
  "19e594278e50461a60a3b46a1c0222d9afe6b9351345a20f5403006bae1330ae";
const baseURL = "https://apiv3.apifootball.com/";

const request = {
  getCountrys: `${baseURL}?action=get_countries&APIkey=${APIkey}`,
};

export default request;
