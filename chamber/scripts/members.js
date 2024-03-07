document.addEventListener("DOMContentLoaded", function () {
    const gridButton = document.querySelector('#grid');
    const listButton = document.querySelector("#list");
    const display = document.querySelector('#member-container');

    gridButton.addEventListener("click", () => {
        display.classList.remove("list");
        display.classList.add("grid");

        const memberImages = document.querySelectorAll('.member img');
        memberImages.forEach(image => {
            image.style.display = 'block';
        });

        const memberDetails = document.querySelectorAll('.member-details');
        memberDetails.forEach(detail => {
            detail.style.display = 'block';
        });
    });

    listButton.addEventListener("click", () => {
        display.classList.remove("grid");
        display.classList.add("list");

        const memberImages = document.querySelectorAll('.member img');
        memberImages.forEach(image => {
            image.style.display = 'none';
        });

        const memberDetails = document.querySelectorAll('.member-details');
        memberDetails.forEach(detail => {
            detail.style.display = 'block';
        });
    });

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.classList.add('member');
                memberElement.innerHTML = `
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone Number:</strong> ${member['phone numbers']}</p>
                    <p><strong>Web Site:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <img src="${member.image}" alt="${member.name}">
                    <p class="member-details"><strong>Membership:</strong> ${member.membership}</p>
                `;
                display.appendChild(memberElement);
            });
        });
});
