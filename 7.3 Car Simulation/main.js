let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

canvas.height = 500;
canvas.width = 500;

car = new Car(canvas.width / 2, canvas.height / 2);

function animat() {
    requestAnimationFrame(animate);
    AudioContext.clearRect(0, 0, canvas.width, canvas.height);

    //check which key was pressed and call function

    car.update();
}

animate();
canvas.focus();