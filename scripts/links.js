const baseURL = "https://haroldbarraza.github.io/wdd230/";
const linksURL = "https://haroldbarraza.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

function displayLinks(data) {
    const linksContainer = document.getElementById('links-container');

    data.lessons.forEach((lesson) => {
        const lessonDiv = document.createElement('div');
        const lessonTitle = document.createElement('h3');
        const linksList = document.createElement('ul');

        lessonTitle.textContent = `Lesson ${lesson.lesson}:`;

        lesson.links.forEach((link) => {
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;
            listItem.appendChild(linkElement);
            linksList.appendChild(listItem);
        });

        lessonDiv.appendChild(lessonTitle);
        lessonDiv.appendChild(linksList);
        linksContainer.appendChild(lessonDiv);
    });
}

