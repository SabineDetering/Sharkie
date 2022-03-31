class Endboss extends MovableObject {
    static counter = 0;
    id;

    height = 440;
    width = 380;
    x = 1700;
    y = 0;
    collisionOffsetX = 35;
    collisionOffsetY = 220;
    collisionWidth = 300;
    collisionHeight = 130;
    speed = -0.8;
    startEnergy = 15;

    energy = 15;
    wait = true;
    isIntroduced = false;
    attack = false;
    attackFinished = false;

    lifeBarEndboss = new LifeBarEndboss();

    attackSpeedX = -8;
    attackSpeedY;

    intro_sound = new Audio('./audio/endboss_intro.mp3');
    attack_sound = new Audio('./audio/attack.mp3');
    hurt_sound = new Audio('./audio/endboss_hurt.mp3');
    dead_sound = new Audio('./audio/endboss_death.mp3');

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

        this.loadImage(this.IMAGES_INTRODUCE[0]);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
    }


    /**
     * resets all properties that could have been changed during previous game
     */
    reset() {
        this.x = 900;
        this.y = 0;
        this.energy = 15;
        this.wait = true;
        this.isIntroduced = false;
        this.attack = false;
        this.attackFinished = false;
        this.loadImage(this.IMAGES_INTRODUCE[0]);
        this.currentImage = 0;
        this.lifeBarEndboss.showStatus(100);
    }


    /**
     * starts animation of endboss triggered by approaching character (world.run())
     */
    startAnimation() {
        if (this.wait) {
            this.wait = false;
            this.animate();
            if (soundOn) {this.intro_sound.play();}
        }
    }


    /**
     * reduces energy and indirectly starts "isHurt"-interval
     * currentImage set to 0 to start animation with first image
     * lifeBarEndboss is updated
     */
    hit() {
        super.hit();
        this.currentImage = 0;
        if (soundOn) {this.hurt_sound.play();}
        this.lifeBarEndboss.showStatus(this.energy / this.startEnergy * 100);
        if (this.isDead()) {
            if (soundOn) {this.dead_sound.play();}
        }
    }


    /**
     * sets flag to true in order to start attacking animation
     * attackSpeedy is calculated to overcome the vertical distance to the attacked character
     * @param {object} c -character
     */
    isAttacking(c) {
        this.attack = true;
        this.attackSpeedY = (c.collisionMinY + 0.5 * c.collisionHeight - (this.collisionMinY + 0.5 * this.collisionHeight)) / 10;
    }

    /**
     * movement and images for endboss
     */
    animate() {
        this.animationInterval = setInterval(() => {
            // console.log('Endboss id: ', this.id);   
            if (!this.isIntroduced) {
                //intro animation is only shown once when endboss appears
                this.animateImagesOnce(this.IMAGES_INTRODUCE, 'isIntroduced');
            } else if (this.isHurt()) {
                this.animateImages(this.IMAGES_HURT);
            } else if (this.isDead()) {
                this.animateImagesDeath(this.IMAGES_DEAD);
                if (this.currentImage >= this.IMAGES_DEAD.length + 25) {
                    //short timeout after dead animation
                    console.log('finish function called');
                    finishGame(true);
                }
            } else if (this.attack && !this.attackFinished) {
                // attack animation is shown only once, enboss moves to the attacked character
                this.animateImagesOnce(this.IMAGES_ATTACK, 'attackFinished');
                this.x += this.attackSpeedX;
                this.y += this.attackSpeedY;
            } else if (this.attackFinished) {
                //after attack before finish of game
                this.animateImages(this.IMAGES_FLOATING);
            } else {//slowly approaching character
                this.animateImages(this.IMAGES_FLOATING);
                this.x += this.speed;
            }
        }, 100);
    }
}