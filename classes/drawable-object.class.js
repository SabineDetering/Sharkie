class DrawableObject {
    height;
    width;
    x;
    y;
    img;
    imageCache = {};
    // otherDirection = false;

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
        try{
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error loading image: ', e);
            console.log('Could not load: ', this.img.src);
        }
    }
    
}