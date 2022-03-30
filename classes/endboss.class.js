class Endboss extends MovableObject {
    static counter = 0;
    id;

    height = 440;
    width = 380;
    x = 900;
    y = 0;
    collisionOffsetX = 35;
    collisionOffsetY = 220;
    collisionWidth = 300;
    collisionHeight = 130;
    speed = -0.8;
    startEnergy = 15;
   
    lifeBarEndboss = new LifeBarEndboss();

    attackSpeedX = -8;
    attackSpeedY;

    IMAGES_INTRODUCE = [
        './img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];
    IMAGES_FLOATING = [
        './img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];
    IMAGES_ATTACK = [
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png',
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];
    IMAGES_HURT = [
        './img/2.Enemy/3 Final Enemy/Hurt/1.png',
        './img/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/2.Enemy/3 Final Enemy/Hurt/3.png',
        './img/2.Enemy/3 Final Enemy/Hurt/4.png',
        './img/2.Enemy/3 Final Enemy/Hurt/1.png',
        './img/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/2.Enemy/3 Final Enemy/Hurt/3.png',
        './img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];
    IMAGES_DEAD = [
        './img/2.Enemy/3 Final Enemy/Dead/1.png',
        './img/2.Enemy/3 Final Enemy/Dead/2.png',
        './img/2.Enemy/3 Final Enemy/Dead/3.png',
        './img/2.Enemy/3 Final Enemy/Dead/4.png',
        './img/2.Enemy/3 Final Enemy/Dead/1.png',
        './img/2.Enemy/3 Final Enemy/Dead/2.png',
        './img/2.Enemy/3 Final Enemy/Dead/3.png',
        './img/2.Enemy/3 Final Enemy/Dead/4.png',
        './img/2.Enemy/3 Final Enemy/Dead/1.png',
        './img/2.Enemy/3 Final Enemy/Dead/2.png',
        './img/2.Enemy/3 Final Enemy/Dead/3.png',
        './img/2.Enemy/3 Final Enemy/Dead/4.png',
        './img/2.Enemy/3 Final Enemy/Dead/1.png',
        './img/2.Enemy/3 Final Enemy/Dead/2.png',
        './img/2.Enemy/3 Final Enemy/Dead/3.png',
        './img/2.Enemy/3 Final Enemy/Dead/4.png',
        './img/2.Enemy/3 Final Enemy/Dead/5.png'
    ];


    constructor() {
        super();
        this.id = Endboss.counter;
        Endboss.counter++;

        this.energy = 15;
        this.wait = true;
        this.isIntroduced = false;
        this.attack = false;
        this.attackFinished = false;
        this.loadImage(this.IMAGES_INTRODUCE[0]);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        // this.animate();
    }

    reset() {
        this.x = 900;
        this.y = 0;
        this.energy = 15;
        this.wait = true;
        this.isIntroduced = false;
        this.attack = false;
        this.attackFinished = false;
        this.loadImage(this.IMAGES_INTRODUCE[0]);
        this.lifeBarEndboss.showStatus(100);
    }


    hit() {
        super.hit();
        this.currentImage = 0;
        this.lifeBarEndboss.showStatus(this.energy/this.startEnergy*100);
    }
    isAttacking(c) {
        this.attack = true;
        this.attackSpeedY = (c.collisionMinY + 0.5 * c.collisionHeight - (this.collisionMinY + 0.5 * this.collisionHeight)) / 10;
    }

    animate() {
        this.animationInterval=setInterval(() => {
            // console.log('Endboss id: ', this.id);
            if (!this.wait) {
                if (!this.isIntroduced) {
                    this.animateImagesOnce(this.IMAGES_INTRODUCE, 'isIntroduced');
                } else if (this.isHurt()) {
                    this.animateImages(this.IMAGES_HURT);
                } else if (this.isDead()) {
                    this.animateImagesDeath(this.IMAGES_DEAD);
                    if (this.currentImage >= this.IMAGES_DEAD.length + 25) {//after dead animation 
                        // console.log('finish function called');
                        finishGame(true);
                    }
                } else if (this.attack && !this.attackFinished) {
                    this.animateImagesOnce(this.IMAGES_ATTACK, 'attackFinished');
                    this.x += this.attackSpeedX;
                    this.y += this.attackSpeedY;
                } else if (this.attackFinished) {
                    this.animateImages(this.IMAGES_FLOATING);
                } else {
                    this.animateImages(this.IMAGES_FLOATING);
                    this.x += this.speed;
                }
            }
        }, 100);
    }

}