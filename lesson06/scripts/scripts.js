const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '🗑️';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });

        chaptersArrays.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
    else {
        input.focus();
    }
});

const chaptersArrays = getChapterList() || [];

chaptersArrays.forEach(chapter => {
    displayList(chapter)
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '🗑️';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myfavBOMlist', JSON.stringify(chaptersArrays));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myfavBOMlist'))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArrays = chaptersArrays.filter((item) => item !== chapter);
    setChapterList();
}
