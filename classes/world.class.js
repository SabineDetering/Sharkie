class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;//allows character to use all variables of world
    }

    checkCollisions() {
        setInterval(() => {
            this.character.calculateCollisionCoordinates();
            this.level.enemies.forEach((enemy) => {
                enemy.calculateCollisionCoordinates();
                if (this.character.isColliding(enemy)) {
                    console.log('collision');
                }
            })
        }, 1000/60);
    }

    draw() {
        //clear canvas completely to enable redrawing
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);//move coordinates to position of character before drawing

        this.addObjectsToCanvas(this.level.backgroundObjects);
        this.addToCanvas(this.character);
        this.addObjectsToCanvas(this.level.enemies);

        this.ctx.translate(- this.camera_x, 0);//move coordinates back to normal after drawing
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToCanvas(objects) {
        objects.forEach(o => {
            this.addToCanvas(o);
        })
    }

    addToCanvas(mo) {
        if (mo.otherDirection) {
            mo.flipImage(ctx);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            mo.flipImageBack(ctx);
        }
    }
}