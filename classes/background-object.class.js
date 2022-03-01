class BackgroundObject extends MovableObject{
    width = 780;
    height = 480;
    y = 0;
    constructor(imgPath,x) {
        super().loadImage(imgPath);
        this.x = x;
    }
}