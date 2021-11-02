module.exports = function PageController() {
  const modalWrapper = document.querySelector(".modal-overlay");
  const currentWeatherWrapper = document.querySelector(".current-weather");
  const errorMessageElement = document.querySelector(".error-message");

  function setLoadingModal(operation) {
    if (operation === "open") modalWrapper.classList.add("open");
    if (operation === "close") modalWrapper.classList.remove("open");
  }

  function setCurrentWeatherWrapper(operation) {
    if (operation === "active") {
      setErrorMessage("inactive");
      currentWeatherWrapper.classList.add("active");
    }
    if (operation === "inactive")
      currentWeatherWrapper.classList.remove("active");
  }

  function setErrorMessage(operation) {
    if (operation === "active") {
      setCurrentWeatherWrapper("inactive");
      errorMessageElement.classList.add("active");
    }
    if (operation === "inactive")
      errorMessageElement.classList.remove("active");
  }

  return {
    setLoadingModal,
    setCurrentWeatherWrapper,
    setErrorMessage,
  };
};
