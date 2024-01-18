function getCurrentYear() {
    return new Date().getFullYear();
}

function getLastModificationDateTime() {
    const lastModified = new Date(document.lastModified);
    const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    const formattedDate = lastModified.toLocaleDateString('en-US', dateOptions);
    const formattedTime = lastModified.toLocaleTimeString('en-US', timeOptions);

    return `${formattedDate}, ${formattedTime}`;
}

function updateFooter() {
    const copyrightParagraph = document.getElementById('info');
    const lastModifiedParagraph = document.getElementById('lastModified');

    const currentYear = getCurrentYear();
    const lastModificationDateTime = getLastModificationDateTime();

    lastModifiedParagraph.innerHTML = `© ${currentYear} | Harold Dennis Barraza Duran, Perú | Last Modification: ${lastModificationDateTime}`;
}

document.addEventListener('DOMContentLoaded', updateFooter);

