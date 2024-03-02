document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedElement = document.getElementById("lastModified");
    var lastModifiedDate = document.lastModified;

    lastModifiedElement.textContent = lastModifiedDate;

    var apiKey = 'eececc8fc440dba10c2cf1470581941c';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lima,pe&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var temperatureElement = document.getElementById("temperature");
            var descriptionElement = document.getElementById("description");
            var windspeedElement = document.getElementById('wind-speed');

            var temperatureFahrenheit = (data.main.temp * 9 / 5) + 32;

            temperatureElement.textContent = `Temperature: ${temperatureFahrenheit.toFixed(1)} °F`;
            descriptionElement.textContent = `Description: ${data.weather[0].description}`;
            windspeedElement.textContent = `Wind Speed ${data.wind.speed} m/s`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});



const themetoggle = document.getElementById('checkbox-toggle');
const body = document.body;

themetoggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
})


var currentTime = Date.now();
document.getElementById("time").value = currentTime;


