const PageController = require("../modules/PageController")();
const WeatherController = require("../modules/WeatherController")();
const getLocationKey = require("../services/GetLocationKey");
const getCurrentWeather = require("../services/GetCurrentWeather");
const inputElement = document.getElementById("search-input");

const handleSearch = async (input) => {
  if (input.length === 0) return;
  input = input.trim().toLowerCase();
  PageController.setLoadingModal("open");

  try {
    const { locationKey, city } = await getLocationKey(input);
    const currentWeather = await getCurrentWeather(locationKey);

    WeatherController.update(currentWeather, city);
    PageController.setCurrentWeatherWrapper("active");
  } catch (e) {
    console.log(e);
    PageController.setErrorMessage("active");
  }

  inputElement.value = "";
  PageController.setLoadingModal("close");
};

inputElement.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch(inputElement.value);
});
