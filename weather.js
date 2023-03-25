export function getWeather() {
    const API_KEY = "VZYLFZ7ATQGTGAQNBXLQT5EH8";
    let userZIP = localStorage.getItem("userZIP");
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
    
    async function onSuccess(position) {
      const { latitude, longitude } = position.coords;

      // try {
        // throw 'error';
        const geocodeAPI = `htps://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=043aa787c4114ec493b5c8af1b5f247f`;
        const geoData = await (await fetch(geocodeAPI)).json();
  
        locatedZip = geoData.results[0].components.postcode;
  
        const weatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locatedZip}?unitGroup=us&key=${API_KEY}&contentType=json`;
        const newWeatherData = await (await fetch(weatherAPI)).json();
  
        updateWeatherTextOnPage(newWeatherData);
      // } catch(error) {
      //   console.log('Something goes wrong', error);
      // }
    }
    
    function onError(error) {
      console.error(error);
    }
    
    zipForm.addEventListener("submit", event => {
      event.preventDefault();
      const submittedZip = zipInput.value;
      console.log("form submitted");
      const submittedWeatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${submittedZip}?unitGroup=us&key=${API_KEY}&contentType=json`;
      localStorage.setItem("userZIP", submittedZip);
      fetchWeatherData(submittedWeatherAPI);
    });
    
    function updateWeatherTextOnPage(weatherData) {
      console.log(weatherData.currentConditions.temp);
      zip.innerText = weatherData.address;
      temperature.innerText = `${weatherData.currentConditions.temp}°`;
      weatherDescription.innerText = weatherData.description;
    }
    
}