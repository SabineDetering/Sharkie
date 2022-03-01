class Pufferfish extends MovableObject{

    height = 80;
    width = 120;
    constructor(imgPath) {
        super().loadImage(imgPath);
        this.x = 220 + Math.random() * 500;
        this.y = 50 + Math.random() * 320;
    }
}