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

    IMAGES_SWIM = {
        'green': [
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png'
        ],
        'orange': [
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png'
        ],
        'red': [
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
            './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png'
        ]
    }

    IMG_DEAD = {
        'green': ['./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.1.png'],
        'orange': ['./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.1.png'],
        'red': ['./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.1.png']
    }


    constructor(color, x, y, otherDirection, pointOfReturnLeft, pointOfReturnRight) {
        super();
        this.color = color;
        this.loadImage(this.IMAGES_SWIM[color][0]);
        this.loadImages(this.IMAGES_SWIM[color]);
        this.loadImages(this.IMG_DEAD[color]);
        this.x = x + Math.random() * 180;
        this.y = y + Math.random() * 50;
        this.speed = 0.4 + Math.random() * 0.4;
        if (otherDirection) { this.otherDirection = otherDirection; }
        if (pointOfReturnLeft) {
            this.pointOfReturnLeft = pointOfReturnLeft;
        }
        if (pointOfReturnRight) {
            this.pointOfReturnRight = pointOfReturnRight;
        }
    }


    animate() {
        this.animationIntervalMove = setInterval(() => {
            //slapped move shown after slap animation of character (during slap animation wait==true)
            if ((this.slappedNormal || this.slappedInverse) && !this.wait) {
                this.slappedMove();
            } else {//normal move
                this.checkDirection();
                this.normalMove();
            }
        }, 1000 / 60);
        this.animationIntervalImg = setInterval(() => {
            if (this.wait) {//waiting for fin slap finalisation
                this.animateImagesOnce(this.IMAGES_SWIM[this.color].slice(0, 8), 'wait');
                if (!this.wait) { if (soundOn) { this.slap_sound.play(); } }
            } else if (this.slappedNormal || this.slappedInverse) {
                this.img = this.imageCache[this.IMG_DEAD[this.color]];
            } else {
                this.animateImages(this.IMAGES_SWIM[this.color]);
            }
        }, 1000 / 10);
    }


    /**
     * slapped pufferfish is "shot" diagonally upwards
     * x-direction of movement depends on the direction of slapping
     */
    slappedMove() {
        if (this.slappedNormal) {
            this.x += this.hitSpeedX;
            this.y += this.hitSpeedY;
        } else if (this.slappedInverse) {
            this.x -= this.hitSpeedX;
            this.y += this.hitSpeedY;
        }
    }


    /**
     * swimming direction is changed on points of return
     */
    checkDirection() {
        if (!this.otherDirection && this.collisionMinX < this.pointOfReturnLeft
            || this.otherDirection && this.collisionMaxX > this.pointOfReturnRight) {
            this.otherDirection = !this.otherDirection;
        }
    }


    /**
     * pufferfish normally move only horizontally
     */
    normalMove() {
        if (this.otherDirection) {
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }
    }


    /**
     * stops the animation intervals for movement and images
     */
    stopAnimation() {
        clearInterval(this.animationIntervalMove);
        clearInterval(this.animationIntervalImg);
    }
}