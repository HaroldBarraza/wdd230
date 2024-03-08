const linksURL = "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error("Error fetching links: " + response.statusText);
        }
        const data = await response.json();
        displayLinks(data.lesson);
    } catch (error) {
        console.error(error);
    }
}

function displayLinks(lessons) {
    const container = document.getElementById('links-container');
    lessons.forEach(lesson => {
        const div = document.createElement('div');
        div.classList.add('lesson');
        div.innerHTML = `
            <h3>Lesson ${lesson.lesson}</h3>
            <ul>
                ${lesson.links.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('')}
            </ul>
        `;
        container.appendChild(div);
    });
}

getLinks();
