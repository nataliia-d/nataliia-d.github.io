export function getWeather() {
    const API_KEY = "VZYLFZ7ATQGTGAQNBXLQT5EH8";
    let userZIP = localStorage.getItem("userZIP");
    let weatherData;
    let locatedZip;
    
    const zipInput = document.getElementById("zip-input");
    const zipForm = document.getElementById("zip-form");
    const zip = document.getElementById("zip");
    const temperature = document.getElementById("temperature");
    const weatherDescription = document.getElementById("weather-description");
    
    if (userZIP) {
      const weatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userZIP}?unitGroup=us&key=${API_KEY}&contentType=json`;
      fetchWeatherData(weatherAPI);
    } else {
      getCurrentPosition();
    }
    
    function getCurrentPosition() {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }
    }
    
    function onSuccess(position) {
      const { latitude, longitude } = position.coords;
      const geocodeAPI = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=043aa787c4114ec493b5c8af1b5f247f`;
      fetch(geocodeAPI)
        .then(response => response.json())
        .then(data => {
          locationData = data;
          locatedZip = data.results[0].components.postcode;
          console.log(locatedZip);
          const weatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locatedZip}?unitGroup=us&key=${API_KEY}&contentType=json`;
          fetchWeatherData(weatherAPI);
        });
    }
    
    function onError(error) {
      console.error(error);
    }
    
    function fetchWeatherData(api) {
      fetch(api)
        .then(response => response.json())
        .then(data => {
          weatherData = data;
          console.log(weatherData);
          weatherUpdate(weatherData);
        })
        .catch(error => {
          console.error(error);
        });
    }
    
    zipForm.addEventListener("submit", event => {
      event.preventDefault();
      const submittedZip = zipInput.value;
      console.log("form submitted");
      const submittedWeatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${submittedZip}?unitGroup=us&key=${API_KEY}&contentType=json`;
      localStorage.setItem("userZIP", submittedZip);
      fetchWeatherData(submittedWeatherAPI);
    });
    
    function weatherUpdate(weatherData) {
      console.log(weatherData.currentConditions.temp);
      zip.innerText = weatherData.address;
      temperature.innerText = `${weatherData.currentConditions.temp}°`;
      weatherDescription.innerText = weatherData.description;
    }
    
}