class Coin extends CollectableObject{
   
    IMG = 'img/4.Marcadores/1. Coins/1.png';

    constructor(x, y,) {
        super();
        this.x = x;
        this.y = y;
        this.calculateCollisionCoordinates();
        this.loadImage(this.IMG);  
    }
}