
let button = document.getElementById('up');

button.addEventListener("click", inflateButton);

function inflateButton() {
    let inflate = document.getElementById('balloonSize');
    inflate.style.fontSize += "50px";
}