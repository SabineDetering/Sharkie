class Bubble extends MovableObject{
    width = 60;
    height = 60;
    speed = 1.4 ;
    speedY = -0.3;
    direction;
    IMG = './img/1.Sharkie/4.Attack/Bubble trap/Bubble.png';

    constructor(x, y, direction) {
        super();
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.loadImage(this.IMG);
        this.animate();
    }
    animate() {
        setInterval(() => {
            if (this.direction=='right') {
                this.x += this.speed;
                this.y += this.speedY;
            } else {
                this.x -= this.speed;
                this.y += this.speedY;
            } 
        }, 1000 / 60);
    }
}