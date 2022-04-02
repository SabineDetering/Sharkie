class CollectableObject extends MovableObject {
    collisionOffsetX = 0;
    collisionOffsetY = 0;
    collisionWidth = this.width;
    collisionHeight = this.height;
    IMG;

    constructor(x, y) {
        super();
        this.calculateCollisionCoordinates();
    }
}