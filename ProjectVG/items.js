class Item {
    constructor(type) {
        this.width = 120;
        this.height = 140;

        this.positionRandomly();
        this.generateRandomSpeed(5, 10);

        this.isFruit = false;
        if (type == "fruit") {
            this.src = this.selectFruit();
        }
        else {
            this.src = this.selectTrash();
        }
    }

    draw() {
        const itemIMG = new Image();
        itemIMG.src = this.src;
        context.drawImage(itemIMG, this.x, this.y, this.width, this.height);
    }

    update() {
        this.checkBounds();

        this.y += this.speedY;
        this.draw();
    }

    checkBounds() {
        if ((this.x + this.width) > canvas.width || this.x < 0) {
            this.positionRandomly();
        }
    }

	isColliding(item) {
		const distance = this.calculateDistance(item);
		return (distance <= (this.width + item.width) && distance > 0);
	}

	calculateDistance(item) {
		return Math.hypot(this.x - item.x, this.y - item.y); 
	}

    positionRandomly() {
        this.x = this.width + (Math.random() * ((canvas.width - 30) - (this.width * 2)));
		this.y = -(this.width + (Math.random() * (canvas.height - (this.width * 2))));
    }
    
    generateRandomSpeed(min, max) {
        this.speedY =  Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    selectFruit() {
        let randomNumber = Math.floor(Math.random() * 6);
        this.isFruit = true;

        switch (randomNumber) {
            case 0:
                return "images/fruitBanana.png";

            case 1:
                return "images/fruitCherry.png";

            case 2: 
                return "images/fruitApple.png";

            case 3:
                return "images/fruitPineapple.png";

            case 4: 
                return "images/fruitGrapes.png";

            case 5: 
                return "images/fruitWatermelon.png";
        }
    }

    selectTrash() {
        let randomNumber = Math.floor(Math.random() * 2);
        this.isFruit = false;

        switch (randomNumber) {
            case 0:
                return "images/trashBanana.png";

            case 1:
                return "images/trashApple.png";

        }
    }
}