class PufferfishGreen extends Pufferfish {
    IMAGES_SWIM = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png'
    ];

    IMG_DEAD = './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.1.png';

    constructor() {
        super();
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages([this.IMG_DEAD]);
        this.x = 320 + Math.random() * 100;
        this.y = 190 + Math.random() * 50;
    }
}