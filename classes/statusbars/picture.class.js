class Picture extends DrawableObject {
    constructor(x, y, width, height, img) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.loadImage(img);
    }
}