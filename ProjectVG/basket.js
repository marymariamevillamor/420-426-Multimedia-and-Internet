class Basket {
    constructor() {
        this.width = 450;
        this.height = 200;

        this.x = canvas.width / 2;
        this.y = canvas.height - this.height;

        this.velocityX = 20;
    }

    draw() {
        const basketIMG = new Image();
        basketIMG.src = "images/basketIMG.png";
        context.drawImage(basketIMG, this.x, this.y, this.width, this.height);
    }

    displayStatus() {
		context.save();
		context.font = "30px Arial";
		context.fillStyle = "white";
        context.fillText(`Points: ${points}`, (canvas.width - 150), 50);
		context.restore();
	}

    update() {
        this.checkBounds();
        this.draw();
        this.displayStatus();
    }

    checkBounds() {
        if ((this.x + this.width) > canvas.width) {
            this.velocityX = 0;
            this.x = canvas.width - this.width - 1;
        }
        else if (this.x < 0) {
            this.velocityX = 0;
            this.x =  1;
        }
        else {
            this.velocityX = 20;
        }     
    }

    moveLeft() {
        if (this.x != 0) {
            this.x -= this.velocityX;
        }
    }

    moveRight() {
        if ((this.x + this.width) != canvas.width) {
            this.x += this.velocityX;
        }
    }
}