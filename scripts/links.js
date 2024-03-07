const baseURL = "https://haroldbarraza.github.io/wdd230/";

const linksURL = "https://haroldbarraza.github.io/wdd230/data/links.json";

async function getlinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displaylinks(data);
}

getlinks();


const displaylinks = (weeks) => {
    weeks.forEach((week) => {
        let weekcontain = document.createElement('div');
        let weektitle = document.createElement('h3');
        
        weektitle.textContent = week.week;

        weekcontain.appendChild(weektitle);

        week.links.forEach((link) => {
            let linkelement = document.createElement('a');
            linkelement.href = link.url;
            linkelement.textContent = link.title;

            weekcontain.appendChild(linkelement);
        });

        document.getElementById('links-caontainer').appendChild(weekcontain);
    });
}

getlinks();