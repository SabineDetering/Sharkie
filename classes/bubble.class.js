class Bubble extends MovableObject {
    width = 60;
    height = 60;
    collisionOffsetX = 0;
    collisionOffsetY = 0;
    collisionWidth = this.width;
    collisionHeight = this.height;
    speed = 1.4;
    speedY = -1;
    direction;
    TRAPPED_IMAGES = [];
    type = '';
    withTrappedJelly = false;

    animationIntervalMove;
    animationIntervalImg;


    IMG = {
        poisoned: './img/1.Sharkie/4.Attack/Bubble trap/Poisoned_Bubble.png',
        normal: './img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
    } ;

    IMAGES = {
        'lila': [
            './img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
            './img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
            './img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
            './img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
        ],
        'yellow': [
            './img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
            './img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
            './img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
            './img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
        ],
        'pink': [
            './img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
            './img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
            './img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
            './img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
        ],
        'green': [
            './img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
            './img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
            './img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
            './img/2.Enemy/2 Jelly fish/Dead/green/g4.png'
        ]
    }

    constructor(x, y,type, direction) {
        super();
        this.x = x;
        this.y = y;
        this.type = type;
        this.direction = direction;
        this.loadImage(this.IMG[type]);
        this.loadImages(this.IMAGES['lila']);
        this.loadImages(this.IMAGES['yellow']);
        this.loadImages(this.IMAGES['pink']);
        this.loadImages(this.IMAGES['green']);
        this.animate();
    }


    /**
     * marks that jellyfish was trapped so that animation with images according to the color of the trapped jellyfish is started
     * @param {string} color - color of trapped jellyfish
     */
    withJelly(color) {
        this.withTrappedJelly = true;
        this.TRAPPED_IMAGES = this.IMAGES[color];
        this.width = 105;
        this.height = 150;
    }

    animate() {
        this.animationIntervalMove = setInterval(() => {
            if (this.direction == 'right') {
                this.x += this.speed;
                this.y += this.speedY;
            } else {
                this.x -= this.speed;
                this.y += this.speedY;
            }
        }, 1000 / 60);

        this.animationIntervalImg = setInterval(() => {
            if (this.withTrappedJelly) {
                this.animateImages(this.TRAPPED_IMAGES);
            }
        }, 1000 / 5);
    }

    /**
     * stops the animation intervals for movement and images
     */
    stopAnimation() {
        clearInterval(this.animationIntervalMove);
        clearInterval(this.animationIntervalImg);
    }
}