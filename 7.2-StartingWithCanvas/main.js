const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

let x = 100;
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x++, 100, 50, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
}

animate();