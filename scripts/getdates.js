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
