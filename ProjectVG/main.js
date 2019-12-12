const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let backgroundMusic = new Audio("bgMusic.mp3");

let points = 0;
let extraLife;
let lives = 3;

let type;
let colour = "lightcoral";

let intervalFRUIT;
let intervalTRASH

let menu = new Image();
menu.src = "images/StartScreen.png";
menu.onload = function() {
    context.drawImage(menu, 0, 0, canvas.width, canvas.height);
}

let start = false;
let keys = {};

//from lab 7.3 Car Simulation
window.addEventListener("keydown", event => { keys[event.key] = true;
    if (event.key == "Enter"){
        start = true;
        items = [];
        points = 0;
        lives = 3;
        game();
    } 
});

//from lab 7.3 Car Simulation
window.addEventListener("keyup", event => { keys[event.key] = false;});

let items = [];
let basket = new Basket();

function game() {

    //from W3School
    intervalFRUIT = setInterval(function() { spawnItem("fruit"); }, 1500);
    intervalTRASH = setInterval(function() { spawnItem("trash"); }, 2000);
    animate();
}


function animate() {
    if (start){
        backgroundMusic.loop = true;
        backgroundMusic.play();
        requestAnimationFrame(animate);
    }

    context.fillStyle = colour;
    context.fillRect(0, 0, canvas.width, canvas.height);

    //from lab 7.3 Car Simulation
    if (keys.ArrowLeft) {
        basket.moveLeft();
        console.log(start);
    }
    if (keys.ArrowRight) {
        basket.moveRight();
    }

    //from lab 7.2 Bubbles
    items.map(item => item.update(basket));
    basket.update();

    if (!start){

        //from W3School
        clearInterval(intervalFRUIT);
        clearInterval(intervalTRASH);

        let over = new Image();
        over.src = "images/GameOverScreen.png";
        over.onload = function() {
            context.drawImage(over, 0 , 0, canvas.width, canvas.height);
            
            //from lab 7.3 Car Simulation
            context.save();
            context.font = "100px Arial";
            context.fillStyle = "white";
            context.fillText(`You scored ${points} points`, (320), ((canvas.height / 2) + 100));
            context.restore();
        }
    }
}

function spawnItem(itemType) {
    if (itemType == "fruit") {
        const newItem = new Item(itemType);

        //from lab 7.2 Bubbles
        while (items.some(item => newItem.isColliding(item))) {
            newItem.positionRandomly();
        }
    
        items.push(newItem);
    }
    else {
        const newItem = new Item(itemType);

        //from lab 7.2 Bubbles
        while (items.some(item => newItem.isColliding(item))) {
            newItem.positionRandomly();
        }
    
        items.push(newItem);
    }
}








