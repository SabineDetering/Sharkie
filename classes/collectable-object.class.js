class CollectableObject extends MovableObject {
    collisionOffsetX = 0;
    collisionOffsetY = 0;
    collisionWidth = this.width;
    collisionHeight = this.height;
    IMG;
    // isCollected = false;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        // this.loadImage(this.IMG);
    }

}