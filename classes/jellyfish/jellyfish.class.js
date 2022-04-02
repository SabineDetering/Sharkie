class Jellyfish extends MovableObject {
    height = 80;
    width = 120;
    collisionOffsetX = 20;
    collisionOffsetY = 10;
    collisionWidth = 85;
    collisionHeight = 62;
    speedY = 5;
    animationInterval;

    animate() {
        this.animationIntervalMove = setInterval(() => {
            this.animateImages(this.IMAGES[this.color]);

            //change direction
            if (this.otherDirection && this.collisionMinY < 10 || !this.otherDirection && this.collisionMaxY > 470) {
                this.otherDirection = !this.otherDirection;
            }

            if (this.otherDirection) {
                this.y -= this.speedY;
            } else {
                this.y += this.speedY;
            }
        }, 1000 / 10);
    }
}