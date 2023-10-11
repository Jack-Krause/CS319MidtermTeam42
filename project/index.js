const jsonUrl = "./data.json";

function getMovie(movieId) {
    const movieElement = document.getElementById(movieId);

    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("${response.status}");
            }
            return response.json();
        })
        .then(data => {
            const comedies = data.genres.comedyMovies;
            const movie = comedies.find(movie => movie.id === movieId);

            if (movie) {
                movieElement.innerHTML = `
                <h1>${movie.title}</h1>
                <p>Starring: ${movie.star}</p>
                <p>IMDb Rating: ${movie.imdbRating}</p>
                <p>Genre: ${movie.genre}</p>
                <p>URL: <a href="${movie.url}">IMDb Link</a></p>
            `;
            } else {
                movieElement.innerHTML = 'Movie not found';
            }
        })
        .catch(error => {
            console.error('Error', error);
        });
}

//show more info for comedy-c1
const c1Button = document.getElementById("c1_button");

c1Button.addEventListener("click", function() {
    getMovie('c1');
});






