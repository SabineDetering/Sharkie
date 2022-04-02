class Coin extends CollectableObject{
    width = 40;
    height = 40;
    collisionOffsetX = 0;
    collisionOffsetY = 0;
    collisionWidth = this.width;
    collisionHeight = this.height;
    IMG = 'img/4.Marcadores/1. Coins/1.png';

    constructor(x, y,) {
        super();
        this.x = x;
        this.y = y;
        this.calculateCollisionCoordinates();
        this.loadImage(this.IMG);  
    }
}