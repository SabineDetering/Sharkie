class PoisonedBubble extends Bubble{
    IMG = './img/1.Sharkie/4.Attack/Bubble trap/Poisoned_Bubble.png';

    width = 70;
    height = 70;

    constructor(x, y, direction) {
        super();
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.loadImage(this.IMG);
    }
}