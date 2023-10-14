const APIkey = process.env.REACT_APP_API_KEY;
const baseURL = "https://apiv3.apifootball.com/";

const request = {
  getCountrys: `${baseURL}?action=get_countries&APIkey=${APIkey}`,
};

export default request;
