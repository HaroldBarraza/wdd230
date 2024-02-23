document.addEventListener("DOMContentLoaded", function () {
    var lastVisit = parseInt(localStorage.getItem("visitDate"));
    var currentDate = Date.now();
    var millisecondsPerDay = 24 * 60 * 60 * 1000;

    if (!lastVisit || isNaN(lastVisit)) {
        localStorage.setItem("visitDate", currentDate);
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        var daysSinceLastVisit = Math.floor((currentDate - lastVisit) / millisecondsPerDay);

        if (daysSinceLastVisit === 0) {
            displayMessage("Back so soon! Awesome!");
        } else {
            displayMessage("You last visited " + daysSinceLastVisit + (daysSinceLastVisit === 1 ? " day" : " days") + " ago.");
        }
    }
});

function displayMessage(message) {
    var visitMessage = document.getElementById("message");
    visitMessage.textContent = message;
}


