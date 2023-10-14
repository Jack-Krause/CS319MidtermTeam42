const jsonUrl = "./data.json";


function getMovie(movieId) {
    const movieElement = document.getElementById(movieId);
    // const tempButton = document.getElementById(`${movieId}_button`);

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
                // tempButton.hidden = true;
                // const tempCollapse = document.getElementById(`${movieId}_collapse`);
                // tempCollapse.hidden = false;
            } else {
                movieElement.innerHTML = 'Movie not found';
            }
        })
        .catch(error => {
            console.error('Error', error);
        });
}

function collapseMovie(movieId) {
    let tempContainer = document.getElementById(movieId);
    tempContainer.innerHTML = "";
}


//show more info for comedy-c1
const c1Button = document.getElementById("c1_button");
c1Button.addEventListener("click", function() {
    c1Button.hidden = true;
    getMovie('c1');
    c1Collapse.hidden = false;
});
const c1Collapse = document.getElementById("c1_collapse");
c1Collapse.addEventListener("click", function() {
    c1Collapse.hidden = true;
    collapseMovie('c1');
    c1Button.hidden = false;
});


//comedy-c2
const c2Button = document.getElementById("c2_button");
c2Button.addEventListener("click", function() {
    c2Button.hidden = true;
    getMovie('c2');
    c2Collapse.hidden = false;
});
const c2Collapse = document.getElementById("c2_collapse");
c2Collapse.addEventListener("click", function() {
    c2Collapse.hidden = true;
    collapseMovie('c2');
    c2Button.hidden = false;
});


