class PufferfishOrange extends Pufferfish {

    IMAGES_SWIM = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
    ];


    constructor(imgPath) {
        super(imgPath);
        this.loadImages(this.IMAGES_SWIM);
    }
}