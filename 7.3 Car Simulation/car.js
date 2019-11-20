class Car {
    height = 50;
    width = 25;
    speed = 0;
    maxSpeed = 5;
    rotation = 0;
    friction = 0.95;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }    

    draw() {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.rotation * Math.PI / 180);
        context.fillStyle = "Medium Purple";
        context.fillRect(0, 0, this.width, this.height);
        context.restore();
    }

    update() {
        this.draw();
    }
}
