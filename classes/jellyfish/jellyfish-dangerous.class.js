class JellyfishDangerous extends Jellyfish{

    speedY = 10;
    maxSpeedX=40;

    IMAGES = {
        'green':
            [
                './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
                './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
                './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
                './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
            ],
        'pink':
            [
                './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
                './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
                './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
                './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
            ]
    };

    constructor(color, x, y) {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
        this.loadImage(this.IMAGES[color][0]);
        this.loadImages(this.IMAGES[color]);
    }


    animate() {
        this.animationIntervalMove = setInterval(() => {
            this.animateImages(this.IMAGES[this.color]);
            this.x += (Math.random() - 0.5) * this.maxSpeedX;

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
