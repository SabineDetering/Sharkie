class MovableObject {
    height = 100;
    width = 150;
    img;
    speed;
    otherDirection = false;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();//loads image
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight(speed) {
        setInterval(() => {
            this.x += speed;
        }, 1000 / 60);
    }

    moveLeft(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000/60 );
    }

    moveUp(speed) {
        setInterval(() => {
            this.y -= speed;
        }, 1000 / 60);
    }
    moveDown(speed) {
        setInterval(() => {
            this.y += speed;
        }, 1000 / 60);
    }
}