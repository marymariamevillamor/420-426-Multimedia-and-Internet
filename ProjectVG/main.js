const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const items = [];

let item = new Item();
let basket = new Basket();

document.onkeydown = moveBasket;

function moveBasket(event) {
    switch (event.keyCode) {
        case 37:
            basket.moveLeft();
            break;
        
        case 39:
            basket.moveRight();
            break;
    }
}

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
    context.fillStyle = "lightcoral";
    context.fillRect(0, 0, canvas.width, canvas.height);

    items.map(item => item.update(items));
    basket.update();
}

animate();
setInterval(spawnItem("fruit"), 1000);
setInterval(spawnItem("trash"), 2000);
