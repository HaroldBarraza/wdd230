document.addEventListener("DOMContentLoaded", function () {
    var timeElement = document.getElementById("time");
    if (timeElement) {
        var currentTime = Date.now();
        timeElement.value = currentTime;
    }

    var lastModifiedElement = document.getElementById("lastModified");
    var lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = lastModifiedDate;


    const themetoggle = document.getElementById('checkbox-toggle');
    const body = document.body;

    themetoggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    })

    var welcome = document.getElementById("banner");
    var close = document.getElementById("close");
    var date = new Date();
    var day = date.getDay();

    if (day >= 1 && day <= 3) {
        welcome.style.display = "block";
    }

    close.addEventListener("click", function () {
        welcome.style.display = "none";
    })
})


const appid = 'eececc8fc440dba10c2cf1470581941c';
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-12.04&lon=-77.04&units=metric&appid=${appid}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    const currentWeather = data.list[0];
    const currentTemp = currentWeather.main.temp.toFixed(0);
    const weatherDesc = currentWeather.weather[0].description;
    const weatherIcon = currentWeather.weather[0].icon;

    document.getElementById('currentTemp').innerHTML = `Temperature: ${currentTemp}°C`;
    document.getElementById('weatherDesc').textContent = `Description: ${weatherDesc}`;

    const iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
    const weatherIconElement = document.getElementById('weatherIcon');
    weatherIconElement.setAttribute('src', iconUrl);
    weatherIconElement.setAttribute('alt', weatherDesc);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 1; i <= 3; i++) {
        const forecast = data.list[i];
        const forecastDate = new Date(forecast.dt * 1000);
        const forecastDay = daysOfWeek[forecastDate.getDay()];
        const forecastTemp = forecast.main.temp.toFixed(0);
        const forecastDesc = forecast.weather[0].description;
        const forecastIcon = forecast.weather[0].icon;

        document.getElementById(`forecast-day${i}-temp`).textContent = `Temperature: ${forecastTemp}°C`;
        document.getElementById(`forecast-day${i}-desc`).textContent = `Description: ${forecastDesc}`;

        const forecastIconUrl = `https://openweathermap.org/img/w/${forecastIcon}.png`;
        const forecastIconElement = document.getElementById(`forecast-day${i}-icon`);
        forecastIconElement.setAttribute('src', forecastIconUrl);
        forecastIconElement.setAttribute('alt', forecastDesc);
    };
};


document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.mobile-menu-icon');
    var menu = document.querySelector('.main-menu');

    function toggleMenu(event) {
        menu.classList.toggle('is_active');
        event.preventDefault();
    }

    menuIcon.addEventListener('click', toggleMenu);
});
