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

            temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
            descriptionElement.textContent = `Description: ${data.weather[0].description}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});



const themetoggle = document.getElementById('checkbox-toggle');
const body = document.body;

themetoggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
})
