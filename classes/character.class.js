class Character extends MovableObject {
    height = 340;
    width = 360;
    x = 0;
    y = 100;
    speed = 1;

    collisionOffsetX = 75;
    collisionOffsetY = 160;
    collisionWidth = 205;
    collisionHeight = 100;

    isSlapping = false;
    isBubbling = false;
    isBubblingPoison = false;

    collectedCoins = 0;
    collectedPoisons = 0;
    killedByEndboss = false;


    IMAGES_IDLE = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png',
        './img/1.Sharkie/1.IDLE/16.png',
        './img/1.Sharkie/1.IDLE/17.png',
        './img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_LONG_IDLE = [
        './img/1.Sharkie/2.Long_IDLE/I1.png',
        './img/1.Sharkie/2.Long_IDLE/I2.png',
        './img/1.Sharkie/2.Long_IDLE/I3.png',
        './img/1.Sharkie/2.Long_IDLE/I4.png',
        './img/1.Sharkie/2.Long_IDLE/I5.png',
        './img/1.Sharkie/2.Long_IDLE/I6.png',
        './img/1.Sharkie/2.Long_IDLE/I7.png',
        './img/1.Sharkie/2.Long_IDLE/I8.png',
        './img/1.Sharkie/2.Long_IDLE/I9.png',
        './img/1.Sharkie/2.Long_IDLE/I10.png',
        './img/1.Sharkie/2.Long_IDLE/I11.png',
        './img/1.Sharkie/2.Long_IDLE/I12.png',
        './img/1.Sharkie/2.Long_IDLE/I13.png',
        './img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    IMAGES_SWIM = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png',
    ];
    IMAGES_HURT_POISONED = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];
    IMAGES_HURT_SHOCK = [
        './img/1.Sharkie/5.Hurt/2.Electric_shock/o1.png',
        './img/1.Sharkie/5.Hurt/2.Electric_shock/o2.png',
        './img/1.Sharkie/5.Hurt/2.Electric_shock/o1.png',
        './img/1.Sharkie/5.Hurt/2.Electric_shock/o2.png',
        './img/1.Sharkie/5.Hurt/2.Electric_shock/o1.png',
        './img/1.Sharkie/5.Hurt/2.Electric_shock/o2.png'
    ];

    IMAGES_ATTACK_BUBBLE = [
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_ATTACK_POISONED_BUBBLE = [
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];
    IMAGES_ATTACK_WITHOUT_BUBBLE = [
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/8.png'
    ];

    IMAGES_ATTACK_FIN = [
        './img/1.Sharkie/4.Attack/Fin slap/1.png',
        './img/1.Sharkie/4.Attack/Fin slap/4.png',
        './img/1.Sharkie/4.Attack/Fin slap/5.png',
        './img/1.Sharkie/4.Attack/Fin slap/6.png',
        './img/1.Sharkie/4.Attack/Fin slap/7.png',
        './img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];
    IMAGES_DEAD_POISONED = [
        './img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];
    IMAGES_DEAD_SHOCK = [
        './img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];
    IMAGES_DEAD_ENDBOSS = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];

    world; // to get access to keyboard
    swim_sound = new Audio('./audio/silent_swim.mp3');

    constructor() {
        super();
        this.loadImage('./img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_HURT_SHOCK);
        this.loadImages(this.IMAGES_ATTACK_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_POISONED_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_WITHOUT_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_FIN);
        this.loadImages(this.IMAGES_DEAD_POISONED);
        this.loadImages(this.IMAGES_DEAD_SHOCK);
        this.loadImages(this.IMAGES_DEAD_ENDBOSS);
        this.animate();
    }

    isLongIdle() {
        let timePassed = new Date().getTime() - this.world.keyboard.lastKeyMove;
        return timePassed > 2000;
    }

    hit() {
        super.hit();
        this.currentImage = 0;
        this.world.lifeBar.showStatus(this.energy);
    }

    collect(o) {
        if (o instanceof Coin) {
            this.collectedCoins++;
            this.world.coinBar.showStatus(this.collectedCoins / this.world.level.totalCoins * 100);
        } else {
            this.collectedPoisons++;
            this.world.poisonBar.showStatus(this.collectedPoisons / this.world.level.totalPoisons * 100);
        }
    }

    animate() {
        //Movement
        setInterval(() => {
            if (!this.world.endOfGame) {
                if (this.killedByEndboss && this.currentImage >= this.IMAGES_DEAD_ENDBOSS.length && this.collisionMaxY < 400) {//let bones fall to ground
                    this.y += 5;
                    this.calculateCollisionCoordinates();
                }

                this.swim_sound.pause();
                if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                    this.x += this.speed;
                    this.otherDirection = false;
                    this.swim_sound.play();
                }
                if (this.world.keyboard.left && this.x > this.world.level.level_start_x) {
                    this.x -= this.speed;
                    this.otherDirection = true;
                    this.swim_sound.play();
                }
                if (this.world.keyboard.up && this.collisionMinY > 0) {
                    this.y -= this.speed;
                    this.swim_sound.play();
                }
                if (this.world.keyboard.down && this.collisionMaxY < 460) {
                    this.y += this.speed;
                    this.swim_sound.play();
                }
                this.world.camera_x = -this.x + 30;
            }
        }, 1000 / 60);

        //Image animation 
        setInterval(() => {
            if (!this.world.endOfGame) {
                if (this.world.endboss.attackFinished) {
                    this.animateImagesDeath(this.IMAGES_DEAD_ENDBOSS);
                    if (this.currentImage >= this.IMAGES_DEAD_ENDBOSS.length + 32) {//after dead animation plus sinking bones
                        // console.log('finish function called');
                        finishGame(false);

                    }
                } else if (this.isDead()) {
                    this.animateImagesDeath(this.IMAGES_DEAD_POISONED);
                    if (this.currentImage >= this.IMAGES_DEAD_POISONED.length + 20) {//after dead animation
                        // console.log('finish function called');
                        finishGame(false);
                    }
                } else if (this.isHurt()) {
                    this.animateImages(this.IMAGES_HURT_POISONED);
                } else if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.up || this.world.keyboard.down) {
                    this.animateImages(this.IMAGES_SWIM);
                } else if (this.isSlapping) {
                    this.animateImagesOnce(this.IMAGES_ATTACK_FIN, 'isSlapping');
                } else if (this.isLongIdle()) {
                    this.animateImages(this.IMAGES_LONG_IDLE);
                } else if (this.isBubbling) {
                    this.animateBubbling(false);
                } else if (this.isBubblingPoison) {
                    this.animateBubbling(true);
                } else {
                    this.animateImages(this.IMAGES_IDLE);
                }
            }
        }, 100);
    }
    animateBubbling(poison) {
        let bubble;
        if (poison) {
            this.animateImagesOnce(this.IMAGES_ATTACK_BUBBLE, 'isBubblingPoison');
            if (!this.isBubblingPoison) {
                if (this.otherDirection) {
                    bubble = new PoisonedBubble(this.collisionMinX - 70, this.collisionMinY + 20, 'left');
                } else {
                    bubble = new PoisonedBubble(this.collisionMaxX + 10, this.collisionMinY + 20, 'right');
                }
                this.world.bubbles.push(bubble);
                this.collectedPoisons--;
                this.world.poisonBar.showStatus(this.collectedPoisons / this.world.level.totalCoins * 100);
            }
        } else {
            this.animateImagesOnce(this.IMAGES_ATTACK_BUBBLE, 'isBubbling');
            if (!this.isBubbling) {
                if (this.otherDirection) {
                    bubble = new Bubble(this.collisionMinX - 80, this.collisionMinY + 20, 'left');
                } else {
                    bubble = new Bubble(this.collisionMaxX + 20, this.collisionMinY + 20, 'right');
                }
                this.world.bubbles.push(bubble);
            }
        }
    }
}