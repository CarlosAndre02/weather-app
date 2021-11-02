module.exports = function WeatherController() {
  const cityElement = document.querySelector(".temperature-city");
  const currentTemperature = document.querySelector(
    ".temperature-current > span"
  );
  const maximumTemperature = document.querySelector(
    ".temperature-maximum > span"
  );
  const minimumTemperature = document.querySelector(
    ".temperature-minimum > span"
  );
  const textTemperature = document.querySelector(".temperature-text");
  const wind = document.querySelector(".conditions-group.wind span");
  const precipitation = document.querySelector(
    ".conditions-group.precipitation span"
  );
  const humidity = document.querySelector(".conditions-group.humidity span");
  const pressure = document.querySelector(".conditions-group.pressure span");
  const visibility = document.querySelector(
    ".conditions-group.visibility span"
  );

  function update(currentWeather, city) {
    cityElement.innerText = city;
    currentTemperature.innerText = Math.round(
      Number(currentWeather.Temperature.Metric.Value)
    );
    maximumTemperature.innerText = Math.round(
      Number(
        currentWeather.TemperatureSummary.Past12HourRange.Maximum.Metric.Value
      )
    );
    minimumTemperature.innerText = Math.round(
      Number(
        currentWeather.TemperatureSummary.Past12HourRange.Minimum.Metric.Value
      )
    );
    textTemperature.innerText = currentWeather.WeatherText;
    wind.innerText = Math.round(Number(currentWeather.Wind.Speed.Metric.Value));
    precipitation.innerText = currentWeather.Precip1hr.Metric.Value;
    humidity.innerText = currentWeather.RelativeHumidity;
    pressure.innerText = currentWeather.Pressure.Metric.Value;
    visibility.innerText = Math.round(
      Number(currentWeather.Visibility.Metric.Value)
    );
  }

  return {
    update,
  };
};
