class Item {
    constructor(type) {
        this.width = 200;
        this.height = 230;

        this.positionRandomly();  //from lab 7.2 Bubbles
        this.levelup();

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

        let x = 15;
        for (let i = 0; i < lives; i++) {
            let heart = new Image();
            heart.src = "images/pixelHeart.png";
            context.drawImage(heart, x, 10, 100, 100);

            x += 110;
        }
    }

    update(basket) {
        this.checkBounds();

        this.y += this.speedY;
        this.draw();

        this.catchFruit(basket);
    }

    checkBounds() {
        if ((this.x + this.width) > canvas.width || this.x < 0) {
            this.positionRandomly();
        }

        if (this.y > canvas.height) {
            this.deleteFruit();

            if (this.isFruit == true && this.extraLife == false) {
                this.gameover();
            }
        }
    }

    //from lab 7.2 Bubbles
	isColliding(item) {
		const distance = this.calculateDistance(item);
		return (distance <= (this.width + item.width) && distance > 0);
	}

    //from lab 7.2 Bubbles
	calculateDistance(item) {
		return Math.hypot(this.x - item.x, this.y - item.y); 
	}

    //from lab 7.2 Bubbles
    positionRandomly() {
        this.x = this.width + (Math.random() * ((canvas.width - 30) - (this.width * 2)));
		this.y = -(this.width + (Math.random() * (canvas.height - (this.width * 2))));
    }
    
    //from W3School
    generateRandomSpeed(min, max) {
        this.speedY = Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    selectFruit() {
        let randomNumber = Math.floor(Math.random() * 8);
        this.isFruit = true;
        this.type = " ";
        this.extraLife = false;

        switch (randomNumber) {
            case 0:
                return "images/fruitBanana.png";

            case 1:
                return "images/fruitCherry.png";

            case 2: 
                return "images/fruitApple.png";

            case 3:
                this.type = "pineapple";
                return "images/fruitPineapple.png";

            case 4: 
                return "images/fruitGrapes.png";

            case 5: 
                return "images/fruitWatermelon.png";

            case 6:
                return "images/fruitOrange.png";
            
            case 7:
                this.extraLife = true;
                return "images/pixelHeart.png";
        }
    }

    selectTrash() {
        let randomNumber = Math.floor(Math.random() * 6);
        this.isFruit = false;

        switch (randomNumber) {
            case 0:
                return "images/trashBanana.png";

            case 1:
                return "images/trashApple.png";
            
            case 2:
                return "images/trashWatermelon.png";

            case 3:
                return "images/trashFish.png";

            case 4:
                return "images/trashPoop.png";

            case 5:
                return "images/trashTire.png";

        }
    }

    catchFruit(basket) {
        if (    (this.x + (this.width / 2)) > basket.x &&
                (this.x + (this.width / 2)) < (basket.x + basket.width) &&
                (this.y + this.height) < (basket.y + (basket.height / 2)) &&
                ((this.y + this.height) > basket.y)) {
                this.deleteFruit()

                if (this.extraLife == true) {
                    this.bonus();
                }
                else {
                    if (this.isFruit == true) {
                        if (this.type == "pineapple") {
                            points += 5;
                        }
                        else {
                            points++;
                        }
                    }
                    else {
                        this.gameover();
                    }
                }
        }       
    }

    //from W3School
    deleteFruit() {
        let index = items.indexOf(this);
        items.splice(index, 1);
    }

    levelup() {
        if (points > 60) {
            this.generateRandomSpeed(10, 35);
        }
        else if (points > 50) {
            this.generateRandomSpeed(10, 30);
        }
        else if (points > 40) {
            this.generateRandomSpeed(10, 25);
        }
        else if (points > 30) {
            this.generateRandomSpeed(10, 20);
        }
        else if (points > 20) {
            this.generateRandomSpeed(10, 15);
        }
        else {
            this.generateRandomSpeed(5, 10);
        }
    }

    gameover() {
        lives--;

        if (lives == 0){
            start = false;
        }
    }

    bonus() {
        if (lives < 3) {
            lives++;
        }
    }
}