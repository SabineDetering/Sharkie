class Poison extends CollectableObject {

    IMAGES = [
        './img/4.Marcadores/Posión/Animada/1.png',
        './img/4.Marcadores/Posión/Animada/2.png',
        './img/4.Marcadores/Posión/Animada/3.png',
        './img/4.Marcadores/Posión/Animada/4.png',
        './img/4.Marcadores/Posión/Animada/5.png',
        './img/4.Marcadores/Posión/Animada/6.png',
        './img/4.Marcadores/Posión/Animada/7.png',
        './img/4.Marcadores/Posión/Animada/8.png'
    ];

    constructor(x, y, image, relativeSpeedX = 1, relativeSpeedY = 0) {
        super();
        this.x = x;
        this.y = y;
        this.calculateCollisionCoordinates();
        this.loadImage(image);
        this.relativeSpeedX = relativeSpeedX;
        this.relativeSpeedY = relativeSpeedY;
    }
}