const jsonUrl = "./data.json";


function getMovie(movieId) {
    const movieElement = document.getElementById(movieId);
    const tempButton = document.getElementById(`${movieId}_button`);

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
                <p>Starring: ${movie.star}</p>
                <p>IMDb Rating: ${movie.imdbRating}</p>
                <p>Genre: ${movie.genre}</p>
                <p>URL: <a href="${movie.url}">IMDb Link</a></p>
                `;
                tempButton.innerText="Close";
                tempButton.addEventListener("click", function() {
                    movieElement.innerHTML = `
                    <p>Movie Data</p>`;
                });
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

//comedy-c2
const c2Button = document.getElementById("c2_button");
c2Button.addEventListener("click", function() {
    getMovie('c2');
})


