class Barrier extends BackgroundObject {
    width = 580;
    height = 200;
    yOffset ;
    collisionOffsetX = 15;
    collisionOffsetY = 25;
    collisionWidth = this.width - 35;
    collisionHeight = this.height - 25;

    constructor(imgPath, x, relativeSpeedY = 0, yOffset = 0) {
        super(imgPath, x);
        this.relativeSpeedY = relativeSpeedY;
        this.yOffset = yOffset;
        this.y = 480 - this.height + this.yOffset;
        this.calculateCollisionCoordinates();
    }
}