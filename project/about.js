//references to elements
const colorText = document.getElementById("color-text");
const colorTextB = document.getElementById("color-textB");
const colorTextC = document.getElementById("color-textC");


colorText.addEventListener("mousemove", function() {
    colorText.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    colorTextB.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    colorTextC.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
});






