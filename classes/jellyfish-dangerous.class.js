class JellyfishDangerous extends Jellyfish{

    IMAGES = {
        'green':
            [
                './img/2.Enemy/2 Jelly fish/Regular damage/Green 1.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Green 2.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Green 3.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Green 4.png',
            ],
        'pink':
            [
                './img/2.Enemy/2 Jelly fish/Regular damage/Pink 1.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Pink 2.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Pink 3.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Pink 4.png',
            ]
    };



    constructor(color, x, y) {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
        this.loadImage(this.IMAGES[color][0]);
        this.loadImages(this.IMAGES[color]);
    }
}
