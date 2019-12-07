class Item {
    constructor() {
        this.width = 150;
        this.height = 150;

        this.positionRandomly();
        this.y = -300;
        this.speedY = 5;
    }

    draw() {
        //fill canvas background
        context.fillStyle = "lightcoral";
        //context.fillRect(0, 0, canvas.width, canvas.height);

        //create trash
        const trash = new Image();
        trash.src = "images/trashBanana.png";
        context.drawImage(trash, this.x, this.y, this.width, this.height);

    }

    checkBounds() {
        if ((this.x + this.width) > canvas.width || this.x < 0) {
            this.positionRandomly();
        }
    }

    direction() {
        this.y += this.speedY;
    }

    collideBasket() {
        
    }

    update() {
        this.direction();
        this.draw();
    }

    positionRandomly() {
		this.x = this.width + (Math.random() * ((canvas.width - 20) - (this.width * 2)));
	}
    
}