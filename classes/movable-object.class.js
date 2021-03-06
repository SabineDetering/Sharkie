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
    animationInterval;
    otherDirection = false;
    currentImage = 0;
    energy = 100;
    lastHit;

    //draws a rectangle around the named instances to mark the area that is relevant for collisions
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Jellyfish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + this.collisionOffsetX, this.y + this.collisionOffsetY, this.collisionWidth, this.collisionHeight);
            ctx.stroke();
        }
    }


    /**
     * calculates the most extreme x and y values of the rectangle surrounding the object closely
     * empty space in images is compensated by x/y offsets and reduced with/height
     */
    calculateCollisionCoordinates() {
        this.collisionMinX = this.x + this.collisionOffsetX;
        this.collisionMaxX = this.x + this.collisionOffsetX + this.collisionWidth;
        this.collisionMinY = this.y + this.collisionOffsetY;
        this.collisionMaxY = this.y + this.collisionOffsetY + this.collisionHeight;
    }


    /**
     * calculates if 2 objects overlap according to their collision coordinates
     * @param {object} mo - object potentially colliding with this object
     * @returns boolean  - true, if objects overlap
     */
    isColliding(mo) {
        return (this.collisionMaxX > mo.collisionMinX && this.collisionMaxX < mo.collisionMaxX
            || mo.collisionMaxX > this.collisionMinX && mo.collisionMaxX < this.collisionMaxX)
            &&
            (this.collisionMaxY > mo.collisionMinY && this.collisionMaxY < mo.collisionMaxY
                || mo.collisionMaxY > this.collisionMinY && mo.collisionMaxY < this.collisionMaxY);
    }


    /**
     * returns true, if time since last hit is less than 0.5 seconds
     * @returns boolean
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        return timePassed < 500;
    }

    /**
     * checks if this object is dead
     * @returns boolean
     */
    isDead() {
        return this.energy == 0;
    }


    /**
     * called by world.run() if key for slapping is pressed
     * current image of character is set to 0 to start slapping animation from beginning
     * returns true if character is placed in correct position for slapping a pufferfish 
     * @param {object} c - character
     * @returns boolean
     */
    isSlapped(c) {
        if (!c.isSlapping) {
            c.isSlapping = true;
            c.currentImage = 0;
        }
        return (this instanceof Pufferfish
            //character must be at about the same vertical position as pufferfish
            && (c.collisionMinY + c.collisionMaxY) / 2 < this.collisionMaxY + 35
            && (c.collisionMinY + c.collisionMaxY) / 2 > this.collisionMinY - 35
            //horizontal distance to pufferfish must be small
            && (c.otherDirection == false && Math.abs(c.collisionMaxX - this.collisionMinX) < 60
                || c.otherDirection == true && Math.abs(c.collisionMinX - this.collisionMaxX) < 60)
        );
    }


    /**
     * used to draw flipped images
     * @param {*} ctx - context
     */
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


    /**
     * shows the images of the array repeatedly
     * @param {array} images - array of image paths that were preloaded
     */
    animateImages(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * images in the array are shown once 
     * then the value of the flag is toggled so that it can be used to check if all images were shown 
     * important: currentImage must be set to 0 before!
     * @param {array} images - array of image paths that were preloaded
     * @param {boolean} flag - marker to show that all images were shown
     */
    animateImagesOnce(images, flag) {
        let path;
        if (this.currentImage < images.length) {
            path = images[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {
            this[flag] = !this[flag];
        }
    }


    /**
     * images in the array are shown once and then always the last image of the array
     * important: currentImage must be set to 0 before!
     * @param {array} images - array of image paths that were preloaded
     */
    animateImagesDeath(images) {
        let path;
        if (this.currentImage < images.length) {
            path = images[this.currentImage];
        } else {
            path = images[images.length - 1];
        }
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * stops animation of an object and deletes it from an object array
     * @param {array} arr - array of objects
     * @param {object} mo - object to delete
     */
    delete(arr, mo) {
        // console.log('array to delete from ', arr);
        // console.log('object to delete ', mo);
        let index = arr.indexOf(mo);
        mo.stopAnimation();
        arr.splice(index, 1);
    }


    /**
     * stops the animation interval
     */
    stopAnimation() {
        clearInterval(this.animationInterval);
    }
}