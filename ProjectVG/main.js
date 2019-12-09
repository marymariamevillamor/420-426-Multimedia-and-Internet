const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = 0;
let extraLife;

let lives = 2;

let type;
let colour = "lightcoral";

const items = [];

let item = new Item();
let basket = new Basket();


let keys = {};
window.addEventListener("keydown", event => { keys[event.key] = true;});
window.addEventListener("keyup", event => { keys[event.key] = false;});


function spawnItem(itemType) {

    if (itemType == "fruit") {
        const newItem = new Item(itemType);

        while (items.some(item => newItem.isColliding(item))) {
            newItem.positionRandomly();
        }
    
        items.push(newItem);
    }
    else {
        const newItem = new Item(itemType);

        while (items.some(item => newItem.isColliding(item))) {
            newItem.positionRandomly();
        }
    
        items.push(newItem);
    }

}

function animate() {
    requestAnimationFrame(animate);
    context.fillStyle = colour;
    context.fillRect(0, 0, canvas.width, canvas.height);


    if (keys.ArrowLeft) {
        basket.moveLeft();
    }
    if (keys.ArrowRight) {
        basket.moveRight();
    }
    items.map(item => item.update(basket));
    basket.update();
}

animate();

setInterval(function() { spawnItem("fruit"); }, 1500);
setInterval(function() { spawnItem("trash"); }, 2000);

