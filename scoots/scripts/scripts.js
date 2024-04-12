const apiKey = 'eececc8fc440dba10c2cf1470581941c';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=${apiKey}&units=metric`;
const latitude = 20.452571393880184;
const longitude = -86.93593404835107;
const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);
        
        const [currentData, forecastData] = await Promise.all([
            currentResponse.json(),
            forecastResponse.json()
        ]);

        if (currentData.main && currentData.weather) {
            document.getElementById('current-temperature').textContent = `Current Temperature: ${currentData.main.temp}°C`;
            document.getElementById('current-humidity').textContent = `Humidity: ${currentData.main.humidity}%`;
        } else {
            document.getElementById('current-temperature').textContent = 'Temperature data not available';
            document.getElementById('current-humidity').textContent = 'Humidity data not available';
        }

        if (forecastData.daily && forecastData.daily.length > 1 && forecastData.daily[1].temp) {
            const tomorrowTemperature = forecastData.daily[1].temp.day;
            document.getElementById('next-day-temperature').textContent = `Next Day's Temperature (3:00pm): ${tomorrowTemperature}°C`;
        } else {
            document.getElementById('next-day-temperature').textContent = 'Temperature data not available';
        }

        if (currentData.weather[0].description && currentData.weather[0].icon) {
            const weatherDescription = currentData.weather[0].description;
            const weatherIcon = `https://openweathermap.org/img/wn/${currentData.weather[0].icon}.png`;
            document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;
            document.getElementById('weather-icon').src = weatherIcon;
        } else {
            document.getElementById('weather-description').textContent = 'Weather data not available';
        }

        if (currentData.main && currentData.main.temp_max) {
            const maxTemp = currentData.main.temp_max;
            document.getElementById('max-temp-message').textContent = `Today's Max Temperature: ${maxTemp}°C`;
            document.getElementById('temperature-message').style.display = 'block';
        } else {
            document.getElementById('max-temp-message').textContent = 'Max temperature data not available';
            document.getElementById('temperature-message').style.display = 'none';
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

window.addEventListener('load', fetchWeather);

document.getElementById('close-message').addEventListener('click', function() {
    document.getElementById('temperature-message').style.display = 'none';
});
