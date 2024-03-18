async function fetchEpisode() {
    try {
        const response = await fetch('https://bobsburgers-api.herokuapp.com/episodes/');
        const data = await response.json();

        const episodeList = document.getElementById('episode');
        episodeList.innerHTML = '';

        data.forEach(episode => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${episode.image}" alt="${episode.name}">
                <div><strong>Name:</strong> ${episode.name}</div>
                <div><strong>Data de lançamento:</strong> ${episode.airDate}</div>
                <div><strong>Temporada:</strong> ${episode.season}</div>
                <div><strong>Episode:</strong> ${episode.episode}</div>
                <div><strong>Total de vizualizações:</strong> ${episode.totalViewers}</div>
            `;

            episodeList.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
    }
}

fetchEpisode();