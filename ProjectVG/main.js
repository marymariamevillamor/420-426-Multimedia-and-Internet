const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// const items = [];
// for (let i = 0 ; i < 50; i++) {
//     const newItem = new Item();

//     items.push(newItem);
// }

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


function animate() {
	requestAnimationFrame(animate);
    context.fillRect(0, 0, canvas.width, canvas.height);

    //items.map(item => item.draw());
    item.update();
    basket.update();
}

animate();