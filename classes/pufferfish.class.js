class Pufferfish extends MovableObject {

    height = 80;
    width = 120;
    

    IMAGES_SWIM = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    
    constructor(imgPath) {
        super().loadImage(imgPath);
        this.x = 220 + Math.random() * 500;
        this.y = 50 + Math.random() * 320;
        this.loadImages(this.IMAGES_SWIM);
        this.speed = 0.15 + Math.random() * 0.3;
        this.animate();
    }
    animate() {
        this.moveLeft(this.speed);
        setInterval(() => {
            this.animateImages(this.IMAGES_SWIM);
        }, 300);
    }
}
