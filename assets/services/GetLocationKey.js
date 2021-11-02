const API_KEY = require("../../env");
const axios = require("axios");

module.exports = async function GetLocationKey(city) {
  const url = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const response = await axios.get(url, {
    params: {
      apikey: API_KEY,
      q: city,
      language: "pt-BR"
    }
  });
  const cityResponse = response.data.find(
    cityResponse => cityResponse.LocalizedName.toLowerCase() === city
  );
  if (!cityResponse) throw new Error("could not fetch content");

  return {
    locationKey: cityResponse.Key,
    city: cityResponse.LocalizedName,
  };
};
