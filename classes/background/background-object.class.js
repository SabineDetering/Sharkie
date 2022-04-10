class BackgroundObject extends MovableObject {
    height = 480;
    y = 0;
    relativeSpeedX;
    relativeSpeedY;
    constructor(imgPath, x, relativeSpeedX = 1, width = 780, relativeSpeedY = 0, y = 0) {
        super().loadImage(imgPath);
        this.x = x;
        this.y=y;
        this.width = width;
        this.relativeSpeedX = relativeSpeedX;
        this.relativeSpeedY = relativeSpeedY;
    }
}