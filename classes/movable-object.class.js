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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
    
    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);// moves the origin of the canvas to the right to take width of object into account when canvas is flipped
        ctx.scale(-1, 1);//flips canvas across y-axis
        this.x = this.x * -1;
    }

    flipImageBack(ctx) {
        ctx.restore();
        this.x = this.x * -1;
    }

    moveRight(speed) {
        setInterval(() => {
            this.x += speed;
        }, 1000 / 60);
    }
    moveLeft(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000 / 60);
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

    animateImages(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}