class LifeBarEndboss extends LifeBar{
    x = 555;
    y = 35;
    IMAGES = [
        './img/4.Marcadores/orange/Life/life_0.png',
        './img/4.Marcadores/orange/Life/life_20.png',
        './img/4.Marcadores/orange/Life/life_40.png',
        './img/4.Marcadores/orange/Life/life_60.png',
        './img/4.Marcadores/orange/Life/life_80.png',
        './img/4.Marcadores/orange/Life/life_100.png'
    ];


    constructor() {
        super();
        this.width=150;
        this.loadImages(this.IMAGES);
        this.showStatus(100);
    }
}