class Jellyfish extends MovableObject {
    height = 80;
    width = 120;
    collisionOffsetX = 30;
    collisionOffsetY = 15;
    collisionWidth = 60;
    collisionHeight = 35;
    speedY = 7;
    animationInterval;

    animate() {
        this.animationIntervalMove = setInterval(() => {
            this.animateImages(this.IMAGES[this.color]);

            //change direction at top and bottom of canvas (as standard)
            if (this.otherDirection && this.collisionMinY < 20 || !this.otherDirection && this.collisionMaxY > 460) {
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