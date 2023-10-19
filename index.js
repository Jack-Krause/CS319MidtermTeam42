// references to html elements
const carouselItemA = document.getElementById("carouselA");
const carouselItemB = document.getElementById("carouselB");
const carouselItemC = document.getElementById("carouselC");

//first carousel item animation
carouselItemA.addEventListener("mouseenter", function() {
    mouseHover("carouselATitle");
});
carouselItemA.addEventListener("mouseleave", function() {
    mouseExit("carouselATitle");
})

//second carousel item animation
carouselItemB.addEventListener("mouseenter", function() {
    mouseHover("carouselBTitle");
})
carouselItemB.addEventListener("mouseleave", function() {
    mouseExit("carouselBTitle");
})

//third carousel item animation
carouselItemC.addEventListener("mouseenter", function() {
    mouseHover("carouselCTitle");
})
carouselItemC.addEventListener("mouseleave", function() {
    mouseExit("carouselCTitle");
})

//functions to change elements
function mouseHover(elementName) {
    let el = document.getElementById(elementName);
    el.style.color = "red";
}

function mouseExit(elementName) {
    let el = document.getElementById(elementName);
    el.style.color = "black";
}


