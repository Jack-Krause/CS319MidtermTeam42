const jsonUrl = "./data.json";

// //methods to give html functionality
function getMovie(movieId) {
  const movieElement = document.getElementById(movieId);

  fetch(jsonUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const action = data.genres.actionMovies;
      const movie = action.find((movie) => movie.id === movieId);

      if (movie) {
        console.log(`Found movie with ID: ${movie.id}`);
        movieElement.innerHTML = `
                  <p>Starring: ${movie.star}</p>
                  <p>IMDb Rating: ${movie.imdbRating}</p>
                  <p>Genre: ${movie.genre}</p>
                  <p>URL: <a href="${movie.url}">IMDb Link</a></p>
                  <img src="${movie.imagePath}" alt="image" class="movie-image">
                  `;
      } else {
        console.warn("Movie not found");
        movieElement.innerHTML = "Movie not found";
      }
    })
    .catch((error) => {
      console.error("Error", error);
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

// for actoion - a1
const a1Button = document.getElementById("a1_button");
a1Button.addEventListener("click", function () {
  a1Button.hidden = true;
  getMovie("a1");
  a1Collapse.hidden = false;
});
const a1Collapse = document.getElementById("a1_collapse");
a1Collapse.addEventListener("click", function () {
  a1Collapse.hidden = true;
  collapseMovie("a1");
  a1Button.hidden = false;
});
const a1Container = document.getElementById("a1_container");
a1Container.addEventListener("mouseover", function () {
  mouseOnContainer("a1_title");
});
a1Container.addEventListener("mouseleave", function () {
  mouseExit("a1_title");
});

//comedy-a2
const a2Button = document.getElementById("a2_button");
a2Button.addEventListener("click", function () {
  a2Button.hidden = true;
  getMovie("a2");
  a2Collapse.hidden = false;
});
const a2Collapse = document.getElementById("a2_collapse");
a2Collapse.addEventListener("click", function () {
  a2Collapse.hidden = true;
  collapseMovie("a2");
  a2Button.hidden = false;
});
const a2Container = document.getElementById("a2_container");
a2Container.addEventListener("mouseover", function () {
  mouseOnContainer("a2_title");
});
a2Container.addEventListener("mouseleave", function () {
  mouseExit("a2_title");
});

//functionality for third movie
const a3Button = document.getElementById("a3_button");
a3Button.addEventListener("click", function () {
  a3Button.hidden = true;
  getMovie("a3");
  a3collapse.hidden = false;
});
const a3collapse = document.getElementById("a3_collapse");
a3collapse.addEventListener("click", function () {
  a3collapse.hidden = true;
  collapseMovie("a3");
  a3Button.hidden = false;
});
const a3Container = document.getElementById("a3_container");
a3Container.addEventListener("mouseover", function () {
  mouseOnContainer("a3_title");
});
a3Container.addEventListener("mouseleave", function () {
  mouseExit("a3_title");
});
