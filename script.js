const allDogs = [
    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5
    },
    {
        dogName: "Dart",
        breed: "Poodle",
        age: 9
    },
    {
        dogName: "Aries",
        breed: "Black Lab",
        age: 2
    },
    {
        dogName: "Apollo",
        breed: "German Shepard",
        age: 3
    },
];

function filterDogs() {
    const minAge = parseInt(document.getElementById('ageInput').value);
    
    const selectedDogs = allDogs.filter(dog => dog.age > minAge);

    const dogList = document.getElementById('dogList');
    dogList.innerHTML = '';

    if (selectedDogs.length === 0) {
        dogList.innerHTML = '<p>No dogs match the criteria.</p>';
    } else {
        selectedDogs.forEach(dog => {
            const dogInfo = document.createElement('div');
            dogInfo.innerHTML = `
                <h2>${dog.dogName}</h2>
                <p><strong>Breed:</strong> ${dog.breed}</p>
                <p><strong>Age:</strong> ${dog.age} years</p>
            `;
            dogList.appendChild(dogInfo);
        });
    }
}

const filterButton = document.getElementById('filterButton');
filterButton.addEventListener('click', filterDogs);
