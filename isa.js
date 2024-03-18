async function fetchCharacters() {
    try {
        const response = await fetch('https://bobsburgers-api.herokuapp.com/characters');
        const data = await response.json();

        const characterList = document.getElementById('characters');
        characterList.innerHTML = '';

        data.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${character.image}" alt="${character.image}">
                <div><strong>Name:</strong> ${character.name}</div>
                <div><strong>Hair:</strong> ${character.hair}</div>
                <div><strong>Gender:</strong> ${character.gender}</div>
                <div><strong>Occupation:</strong> ${character.occupation}</div>
                <div><strong>First Episode:</strong> ${character.firstEpisode}</div>
                <div><strong>Voice by:</strong> ${character.voicedBy}</div>
            `;
            characterList.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
    }
}

fetchCharacters();
