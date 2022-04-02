class LifeBar extends StatusBar {
    y = 35;
    IMAGES = [
        './img/4.Marcadores/green/Life/life_0.png',
        './img/4.Marcadores/green/Life/life_20.png',
        './img/4.Marcadores/green/Life/life_40.png',
        './img/4.Marcadores/green/Life/life_60.png',
        './img/4.Marcadores/green/Life/life_80.png',
        './img/4.Marcadores/green/Life/life_100.png'
    ];


    constructor() {
        super();
        this.width = 150 * (1 + healthImprovement);
        this.loadImages(this.IMAGES);
        this.showStatus(100);
    }


    reset() {
        this.width = 150  * (1 + healthImprovement);
        this.showStatus(100);
    }
}