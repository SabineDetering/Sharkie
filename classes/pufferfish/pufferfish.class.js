class Pufferfish extends MovableObject {
    height = 80;
    width = 120;
    collisionOffsetX = 10;
    collisionOffsetY = 10;
    collisionWidth = 85;
    collisionHeight = 50;
    hitSpeedX = -5;
    hitSpeedY = -3;
    otherDirection = false;
    pointOfReturnLeft = -670;
    pointOfReturnRight = endX - 100;

    slapped = false;
    slappedNormal = false;
    slappedInverse = false;
    wait = false;
    slap_sound = new Audio('./audio/slap.mp3');

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
            //slapped move shown after slap animation of character (during slap animation wait=true)
            if ((this.slappedNormal || this.slappedInverse) && !this.wait) {
                if (this.slappedNormal) {
                    this.x += this.hitSpeedX;
                    this.y += this.hitSpeedY;
                } else if (this.slappedInverse) {
                    this.x -= this.hitSpeedX;
                    this.y += this.hitSpeedY;
                }
            } else {//normal move
                //change direction at horizontal ends of canvas (as standard)
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
                if (!this.wait) { if (soundOn) { this.slap_sound.play(); }}
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
