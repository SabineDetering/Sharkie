class Barrier extends BackgroundObject {
    width = 580;
    height = 200;
    y = 480 - this.height;
    collisionOffsetX = 15;
    collisionOffsetY = 25;
    collisionWidth = this.width -35;
    collisionHeight = this.height-25;

    constructor(imgPath, x) {
        super(imgPath, x);
        this.calculateCollisionCoordinates();
    }
}