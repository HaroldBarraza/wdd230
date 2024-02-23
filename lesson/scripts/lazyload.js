document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedElement = document.getElementById("lastModified");
    var lastModifiedDate = document.lastModified;
    var date = new Date(lastModifiedDate);
    var formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;

    lastModifiedElement.innerHTML = `<br>Harold Dennis Barraza Duran<br> Last Modification: ${formattedDate}`;
});

