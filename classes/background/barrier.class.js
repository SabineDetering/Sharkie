class Barrier extends BackgroundObject {
    width = 580;
    height = 200;
    y = 480 - this.height;

    constructor(imgPath, x) {
        super(imgPath, x);
        this.calculateCollisionCoordinates();
    }
}