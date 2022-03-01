class World {
    character = new Character();
    enemies = [
        new Pufferfish('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new Pufferfish('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'),
        new Pufferfish('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'), 
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')];
    backgroundObjects = [
        new BackgroundObject('./img/3.Background/Layers/5.Water/D1.png',0),
        new BackgroundObject('img/3.Background/Layers/4.Fondo_2/D1.png', 0),
        new BackgroundObject('img/3.Background/Layers/3.Fondo_1/D1.png', 0),
        new BackgroundObject('./img/3.Background/Layers/2.Floor/D1.png', 0),
        new BackgroundObject('./img/3.Background/Layers/1.Light/1.png', 0)
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        //clear canvas to completely to anable redrawing
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToCanvas(this.backgroundObjects);
        this.addToCanvas(this.character);
        this.addObjectsToCanvas(this.enemies);


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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}