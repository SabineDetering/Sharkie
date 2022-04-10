class BackgroundObject extends MovableObject {
    height = 480;
    y = 0;
    relativeSpeed;
    constructor(imgPath, x, relativeSpeed = 1, width = 780) {
        super().loadImage(imgPath);
        this.x = x;
        this.width = width;
        this.relativeSpeed = relativeSpeed;
    }
}