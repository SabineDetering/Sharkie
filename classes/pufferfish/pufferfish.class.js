class Pufferfish extends MovableObject {
    height = 80;
    width = 120;
    collisionOffsetX = 5;
    collisionOffsetY = 5;
    collisionWidth = 100;
    collisionHeight = 62;
    hitSpeedX = -5;
    hitSpeedY = -3;
    otherDirection = false;
    pointOfReturnLeft = -670;
    pointOfReturnRight = endX - 100;

    slapped = false;
    slappedNormal = false;
    slappedInverse = false;
    wait = false;

    animationIntervalMove;
    animationIntervalImg;

    IMG_DEAD;
    IMAGES_SWIM = [];

    constructor( ) {
        super();
        this.speed = 0.3 + Math.random() * 0.4;
    }

    animate() {
        this.animationIntervalMove = setInterval(() => {
            // console.log('wait ', this.wait, 'slappedNormal ', this.slappedNormal, 'slappedInverse ', this.slappedInverse);
            if ((this.slappedNormal || this.slappedInverse) && !this.wait) {//slapped move
                if (this.slappedNormal) {
                    this.x += this.hitSpeedX;
                    this.y += this.hitSpeedY;
                } else if (this.slappedInverse) {
                    this.x -= this.hitSpeedX;
                    this.y += this.hitSpeedY;
                }
            } else {//normal move
                //change direction
                // console.log('otherdirection', this.otherDirection, 'pointOfReturnLeft', this.pointOfReturnLeft);
                // console.log('collisionMinX', this.collisionMinX);
                // console.log('collisionMaxX', this.collisionMaxX);
                if (!this.otherDirection && this.collisionMinX < this.pointOfReturnLeft || this.otherDirection && this.collisionMaxX > this.pointOfReturnRight) {
                    this.otherDirection = !this.otherDirection;
                }
                if (this.otherDirection) {
                    this.x += this.speed;
                } else {
                    this.x -= this.speed;
                }
            }
        }, 1000 / 60);
        this.animationIntervalImg = setInterval(() => {
            if (this.wait) {//waiting for fin slap finalisation
                this.animateImagesOnce(this.IMAGES_SWIM.slice(0, 8), 'wait');
            } else if (this.slappedNormal || this.slappedInverse) {
                this.img = this.imageCache[this.IMG_DEAD];
            } else {
                this.animateImages(this.IMAGES_SWIM);
            }
        }, 1000 / 10);
    }


    /**
     * stops the animation intervals for movement and images
     */
    stopAnimation() {
        clearInterval(this.animationIntervalMove);
        clearInterval(this.animationIntervalImg);
    }
}
