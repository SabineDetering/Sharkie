class MovableObject {
    height = 100;
    width = 150;
    img;
    imageCache = [];
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });
    }
    moveRight(step) {
        setInterval(() => {
            this.x += step;
        }, 1000/60);
        
    }
    moveLeft() { }

    moveUp() { }
    moveDown() { }
}