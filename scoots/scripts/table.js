document.addEventListener('DOMContentLoaded', function() {
    fetch('data/rental.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.rentals.forEach(rental => {
                const row = document.createElement('tr');

                const typeCell = document.createElement('td');
                typeCell.textContent = rental.type;
                row.appendChild(typeCell);

                const maxPersonsCell = document.createElement('td');
                maxPersonsCell.textContent = rental.max_persons;
                row.appendChild(maxPersonsCell);

                const halfDayPriceCell = document.createElement('td');
                halfDayPriceCell.textContent = `$${rental.half_day_price}`;
                row.appendChild(halfDayPriceCell);

                const fullDayPriceCell = document.createElement('td');
                fullDayPriceCell.textContent = `$${rental.full_day_price}`;
                row.appendChild(fullDayPriceCell);

                const imageCell = document.createElement('td');
                const image = document.createElement('img');
                image.src = rental.image;
                image.alt = rental.type;
                imageCell.appendChild(image);
                row.appendChild(imageCell);

                document.getElementById('rental-table').getElementsByTagName('tbody')[0].appendChild(row);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
