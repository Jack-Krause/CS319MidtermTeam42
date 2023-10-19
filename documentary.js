const jsonUrl = "./data.json";

//methods to give html functionality
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
      const documentaries = data.genres.documentaryMovies;
      const movie = documentaries.find((movie) => movie.id === movieId);

      if (movie) {
        console.log(`Found movie with ID: ${movie.id}`);
        movieElement.innerHTML = `
                  <p>Topic: ${movie.topic}</p>
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

// for documentary-d1
const d1Button = document.getElementById("d1_button");
d1Button.addEventListener("click", function () {
  d1Button.hidden = true;
  getMovie("d1");
  d1Collapse.hidden = false;
});
const d1Collapse = document.getElementById("d1_collapse");
d1Collapse.addEventListener("click", function () {
  d1Collapse.hidden = true;
  collapseMovie("d1");
  d1Button.hidden = false;
});
const d1Container = document.getElementById("d1_container");
d1Container.addEventListener("mouseover", function () {
  mouseOnContainer("d1_title");
});
d1Container.addEventListener("mouseleave", function () {
  mouseExit("d1_title");
});

//documentary-d2
const d2Button = document.getElementById("d2_button");
d2Button.addEventListener("click", function () {
  d2Button.hidden = true;
  getMovie("d2");
  d2Collapse.hidden = false;
});
const d2Collapse = document.getElementById("d2_collapse");
d2Collapse.addEventListener("click", function () {
  d2Collapse.hidden = true;
  collapseMovie("d2");
  d2Button.hidden = false;
});
const d2Container = document.getElementById("d2_container");
d2Container.addEventListener("mouseover", function () {
  mouseOnContainer("d2_title");
});
d2Container.addEventListener("mouseleave", function () {
  mouseExit("d2_title");
});

//functionality for third movie
const d3Button = document.getElementById("d3_button");
d3Button.addEventListener("click", function () {
  d3Button.hidden = true;
  getMovie("d3");
  d3collapse.hidden = false;
});
const d3collapse = document.getElementById("d3_collapse");
d3collapse.addEventListener("click", function () {
  d3collapse.hidden = true;
  collapseMovie("d3");
  d3Button.hidden = false;
});
const d3Container = document.getElementById("d3_container");
d3Container.addEventListener("mouseover", function () {
  mouseOnContainer("d3_title");
});
d3Container.addEventListener("mouseleave", function () {
  mouseExit("d3_title");
});
