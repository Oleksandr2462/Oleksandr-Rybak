"use strict";

const lastRequestTime = localStorage.getItem('lastRequestTime');

if (lastRequestTime && new Date().getTime() - lastRequestTime < 2 * 60 * 60 * 1000) {
  const savedWeatherData = localStorage.getItem('weatherData');
  displayWeatherData(JSON.parse(savedWeatherData));
} else {
  const apiKey = '88f076735beca4144946134fc0a76dd8';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('weatherData', JSON.stringify(data));
      localStorage.setItem('lastRequestTime', new Date().getTime());
      displayWeatherData(data);
    })
    .catch(error => console.error(error));
}

function displayWeatherData(data) {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
}
