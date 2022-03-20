class World {
    character = new Character();
    enemies = [
        // new Pufferfish('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        // new Pufferfish('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'),
        // new Pufferfish('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png'),
        new PufferfishGreen('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'),
        new PufferfishOrange('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'),
        new PufferfishRed('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')
    ];
    backgroundObjects = [
        new BackgroundObject('./img/3.Background/Layers/5.Water/D1.png', 0),
        new BackgroundObject('img/3.Background/Layers/4.Fondo_2/D1.png', 0),
        new BackgroundObject('img/3.Background/Layers/3.Fondo_1/D1.png', 0),
        new BackgroundObject('./img/3.Background/Layers/2.Floor/D1.png', 0),
        new BackgroundObject('./img/3.Background/Layers/1.Light/1.png', 0)
    ];
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
}

setWorld() {
    this.character.world = this;//allows character to use all variables of world
}
draw() {
    //clear canvas completely to enable redrawing
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x,0);

    this.addObjectsToCanvas(this.backgroundObjects);
    this.addToCanvas(this.character);
    this.addObjectsToCanvas(this.enemies);


    this.ctx.translate(- this.camera_x,0);
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
        this.ctx.save();
        this.ctx.translate(mo.width, 0);// moves the origin of the canvas to the right to take width of object into account when canvas is flipped
        this.ctx.scale(-1, 1);//flips canvas across y-axis
        mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}
}