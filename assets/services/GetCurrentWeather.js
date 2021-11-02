const API_KEY = require("../../env");
const axios = require("axios");

module.exports = async function GetCurrentWeather(locationKey) {
  const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
  const response = await axios.get(url, {
    params: {
      apikey: API_KEY,
      language: "pt-BR",
      details: "true"
    }
  });
  if (!response.data) throw new Error("could not fetch content");

  return response.data[0];
};
