function getCurrentYear() {
    return new Date().getFullYear();
}

function getLastModifiedDate() {
    return new Date(document.lastModified).toLocaleString();
}

function updateFooter() {
    const copyrightParagraph = document.getElementById('info');
    const lastModifiedParagraph = document.getElementById('lastModified');

    const currentYear = getCurrentYear();
    const lastModifiedDate = getLastModifiedDate();

    copyrightParagraph.innerHTML = `&copy; ${currentYear}`;
    lastModifiedParagraph.innerHTML = `Harold Dennis Barraza Duran, Perú<br>Last Modification: ${lastModifiedDate}`;
}

document.addEventListener('DOMContentLoaded', updateFooter);

function toggleMobile() {
    var mobile = document.querySelector('.mobile');
    mobile.style.display = (mobile.style.display === 'none' || mobile.style.display === '') ? 'block' : 'none';
}

function toggleNav() {
    var nav = document.getElementById('mobileNav');
    nav.classList.toggle('show');
}

function ViewCount() {
    let ViewCount = localStorage.getItem('viewCount') || 0;
    ViewCount = parseInt(ViewCount) + 1;
    localStorage.setItem('viewCount', ViewCount);
    document.getElementById('count').textContent = ViewCount;
}
ViewCount();



var apiKey = 'eececc8fc440dba10c2cf1470581941c';
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Puno,pe&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        var temperatureElement = document.getElementById("temperature");
        var descriptionElement = document.getElementById("description");
        const weatherIcon = document.getElementById("weather-icon");

        var temperatureFahrenheit = (data.main.temp * 9 / 5) + 32;

        temperatureElement.textContent = `Temperature: ${temperatureFahrenheit.toFixed(1)} °F`;
        descriptionElement.textContent = `Description: ${data.weather[0].description}`;

        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.setAttribute('src', iconsrc);
    })
    .catch(error => console.error('Error fetching weather data:', error));
