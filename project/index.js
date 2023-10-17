const carouselItemA = document.getElementById("carouselA");
carouselItemA.addEventListener("mouseenter", function() {
    mouseHover("carouselATitle");
});

function mouseHover(elementName) {
    let el = document.getElementById(elementName);
    el.style.color = "red";
}


