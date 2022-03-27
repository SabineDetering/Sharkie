class PoisonBar extends StatusBar {
    y = 60;
    IMAGES = [
        './img/4.Marcadores/green/Poison/poison_0.png',
        './img/4.Marcadores/green/Poison/poison_20.png',
        './img/4.Marcadores/green/Poison/poison_40.png',
        './img/4.Marcadores/green/Poison/poison_60.png',
        './img/4.Marcadores/green/Poison/poison_80.png',
        './img/4.Marcadores/green/Poison/poison_100.png'
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.showStatus(0);
    }
}