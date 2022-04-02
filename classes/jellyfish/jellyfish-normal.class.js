class JellyfishNormal extends Jellyfish {

    IMAGES = {
        'lila':
            [
                './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
            ],
        'yellow':
            [
                './img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
                './img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
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