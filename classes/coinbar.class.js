class CoinBar extends StatusBar {
    y = 95;
    IMAGES = [
        './img/4.Marcadores/green/Coin/coin_0.png',
        './img/4.Marcadores/green/Coin/coin_20.png',
        './img/4.Marcadores/green/Coin/coin_40.png',
        './img/4.Marcadores/green/Coin/coin_60.png',
        './img/4.Marcadores/green/Coin/coin_80.png',
        './img/4.Marcadores/green/Coin/coin_100.png'
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES);;
        this.showStatus(0);
    }
}