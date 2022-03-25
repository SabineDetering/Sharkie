class MovableObject extends DrawableObject {
    collisionOffsetX = 0;
    collisionOffsetY = 0;
    collisionWidth = this.width;
    collisionHeight = this.height;
    collisionMinX;
    collisionMaxX;
    collisionMinY;
    collisionMaxY;

    speed;
    otherDirection = false;
    currentImage = 0;
    energy = 100;
    lastHit;

    //draws a rectangle around character, pufferfish and endboss
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + this.collisionOffsetX, this.y + this.collisionOffsetY, this.collisionWidth, this.collisionHeight);
            ctx.stroke();
        }
    }

    calculateCollisionCoordinates() {
        this.collisionMinX = this.x + this.collisionOffsetX;
        this.collisionMaxX = this.x + this.collisionOffsetX + this.collisionWidth;
        this.collisionMinY = this.y + this.collisionOffsetY;
        this.collisionMaxY = this.y + this.collisionOffsetY + this.collisionHeight;
    }


    isColliding(mo) {
        return (this.collisionMaxX > mo.collisionMinX && this.collisionMaxX < mo.collisionMaxX
            || mo.collisionMaxX > this.collisionMinX && mo.collisionMaxX < this.collisionMaxX)
            &&
            (this.collisionMaxY > mo.collisionMinY && this.collisionMaxY < mo.collisionMaxY
                || mo.collisionMaxY > this.collisionMinY && mo.collisionMaxY < this.collisionMaxY);
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();//in milliseconds
        }
    }
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        // console.log(timePassed);
        return timePassed < 400;
    }

    isDead() {
        return this.energy == 0;
    }

    isSlapped(c) {
        return (this instanceof Pufferfish
            && (c.collisionMinY + c.collisionMaxY) / 2 < this.collisionMaxY+20
            && (c.collisionMinY + c.collisionMaxY) / 2 > this.collisionMinY-20
            && (c.otherDirection==false && Math.abs(c.collisionMaxX - this.collisionMinX) < 40
            || c.otherDirection == true && Math.abs(c.collisionMinX - this.collisionMaxX) < 40)
            );            
    }

    isLongIdle() {
        let timePassed = new Date().getTime() - this.world.keyboard.lastKeyMove;
        return timePassed > 2000;
    }

    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);// moves the origin of the canvas to the right to take width of object into account when canvas is flipped
        ctx.scale(-1, 1);//flips canvas across y-axis
        this.x = this.x * -1;
    }

    flipImageBack(ctx) {
        ctx.restore();
        this.x = this.x * -1;
    }

    moveRight(speed) {
        setInterval(() => {
            this.x += speed;
        }, 1000 / 60);
    }
    moveLeft(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000 / 60);
    }
    moveUp(speed) {
        setInterval(() => {
            this.y -= speed;
        }, 1000 / 60);
    }
    moveDown(speed) {
        setInterval(() => {
            this.y += speed;
        }, 1000 / 60);
    }

    animateImages(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    animateImagesDeath(images) {
        let path;
        if (this.currentImage < images.length) {
            path = images[this.currentImage];
        } else {
            path = images[images.length - 1]
        }
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}