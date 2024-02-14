function calculateWindChill(temperature, windSpeed) {
    const windSpeedMph = windSpeed * 2.23694;

    if (temperature <= 50 && windSpeedMph > 3.0) {
        const windChill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * temperature * Math.pow(windSpeedMph, 0.16));
        return windChill + '°F';
    } else {
        return 'N/A';
    }
}

const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('wind-speed');
const windChillElement = document.getElementById('wind-chill');

function updateWindChill() {
    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill;
}

window.onload = updateWindChill;
