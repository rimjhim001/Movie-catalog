document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            title: "Inception",
            image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology Releasing on *16 JULY 2010*."
        },
        {
            title: "Interstellar",
            image: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF350,350_QL50_.jpg",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival Releasing on *7 JULY 2014*."
        },
        {
            title: "The Dark Knight",
            image: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham Releasing on *18 JULY 2008*."
        },
        
    ];

    const movieContainer = document.getElementById('movie-container');

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        `;

        movieContainer.appendChild(movieElement);
    });
});
