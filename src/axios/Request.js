const APIkey =
  "8e65fed9ff5ee695c483f88affb3575f58e67eaa9cdc096d6ceb9bd36e166691";
const baseURL = "https://apiv3.apifootball.com/";

const request = {
  getCountrys: `${baseURL}?action=get_countries&APIkey=${APIkey}`,
};

export default request;
