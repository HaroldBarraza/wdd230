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