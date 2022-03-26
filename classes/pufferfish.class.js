class Pufferfish extends MovableObject {
    height = 80;
    width = 120;
    collisionOffsetX = 5;
    collisionOffsetY = 5;
    collisionWidth = 105;
    collisionHeight = 65;
    hitSpeedX = -5;
    hitSpeedY = -3;
    slapped = false;

    IMG_DEAD;
    IMAGES_SWIM = [];

    constructor() {
        super();
        this.loadImages([this.IMG_DEAD]);
        this.loadImages(this.IMAGES_SWIM);
        this.x = 320 + Math.random() * 700;
        this.y = 50 + Math.random() * 320;
        this.speed = 0.15 + Math.random() * 0.4;
        this.animate();
    }
    animate() {
        setInterval(() => {
            if (this.slappedNormal) {
                this.x += this.hitSpeedX;
                this.y += this.hitSpeedY;
            } else if (this.slappedInverse) { 
                this.x -= this.hitSpeedX;
                this.y += this.hitSpeedY;
            } else{
                this.x -= this.speed;
            }
        }, 1000 / 60);
        setInterval(() => {
            if (this.slappedNormal ||this.slappedInverse) {
                this.img = this.imageCache[this.IMG_DEAD];
            } else {
                this.animateImages(this.IMAGES_SWIM);
            }
        }, 1000 / 10);
    }


}
