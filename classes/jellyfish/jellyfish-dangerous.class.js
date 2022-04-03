class JellyfishDangerous extends Jellyfish{

    speedY = 12;
    maxSpeedX=30;

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

    constructor(color, x, y, pointofReturnLower) {
        super();
        this.x = x;
        this.y = y;
        //individual lower turning point e.g. at barrier top
        if (pointofReturnLower) {
            this.pointofReturnLower = pointofReturnLower;
        } else {
            pointofReturnLower = 460;
        }
        this.color = color;
        this.loadImage(this.IMAGES[color][0]);
        this.loadImages(this.IMAGES[color]);
    }


    animate() {
        this.animationIntervalMove = setInterval(() => {
            this.animateImages(this.IMAGES[this.color]);
            //random horizontal deviation
            this.x += (Math.random() - 0.5) * this.maxSpeedX;

            //change direction at top and bottom of canvas or individual turning point
            if (this.otherDirection && this.collisionMinY < 10 || !this.otherDirection && this.collisionMaxY > this.pointofReturnLower) {
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
