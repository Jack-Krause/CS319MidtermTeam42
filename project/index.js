const jsonUrl = "./data.json";


//methods to give html functionality
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
                <img src="${movie.imagePath}" alt="image" class="movie-image">
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

function mouseOnContainer(elementName) {
    let el = document.getElementById(elementName);
    el.style.color = "goldenrod";
}

function mouseExit(elementName) {
    let el = document.getElementById(elementName);
    el.style.color = "white";
}


// for comedy-c1
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
const c1Container = document.getElementById("c1_container");
c1Container.addEventListener("mouseover", function() {
    mouseOnContainer("c1_title");
});
c1Container.addEventListener("mouseleave", function() {
    mouseExit("c1_title");
})

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
const c2Container = document.getElementById("c2_container");
c2Container.addEventListener("mouseover", function() {
    mouseOnContainer("c2_title");
})
c2Container.addEventListener("mouseleave", function() {
    mouseExit("c2_title");
})

//functionality for third movie
const c3Button = document.getElementById("c3_button");
c3Button.addEventListener("click", function() {
    c3Button.hidden = true;
    getMovie('c3');
    c3collapse.hidden = false;
});
const c3collapse = document.getElementById("c3_collapse");
c3collapse.addEventListener("click", function() {
    c3collapse.hidden = true;
    collapseMovie('c3');
    c3Button.hidden = false;
});
const c3Container = document.getElementById("c3_container");
c3Container.addEventListener("mouseover", function() {
    mouseOnContainer("c3_title");
});
c3Container.addEventListener("mouseleave", function() {
    mouseExit("c3_title");
})

