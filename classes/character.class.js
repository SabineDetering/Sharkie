class Character extends MovableObject {
    height = 340;
    width = 360;
    x = 0;
    y = 100;

    collisionOffsetX = 75;
    collisionOffsetY = 160;
    collisionWidth = 200;
    collisionHeight = 100;

    speed = 1;
    isSlapping = false;
    isBubbling = false;
    isBubblingPoison = false;
    killedByEndboss = false;
    lastHitBy;
    startEnergy = 100;

    collectedCoins = 0;
    collectedPoisons = 0;

    world; // to get access to keyboard
    swim_sound = new Audio('./audio/silent_swim.mp3');
    collectCoin_sound = new Audio('./audio/coin.mp3');
    collectPoison_sound = new Audio('./audio/glass.mp3');
    slap_sound = new Audio('./audio/slap.mp3');
    bubble_sound = new Audio('./audio/bubble.mp3');
    hurt_sound = new Audio('./audio/hurt.mp3');
    shocked_sound = new Audio('./audio/shock.mp3');
    dead_sound = new Audio('./audio/killed.mp3');
    win_sound = new Audio('./audio/win.mp3');

    animationIntervalMove;
    animationIntervalImg;

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


    constructor() {
        super();
        //collected coins from previous level increase energy
        this.energy = 100 * (1 + healthImprovement);
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
    }


    /**
     * resets all properties that could have been changed during previous game
     */
    reset() {
        this.x = 0;
        this.y = 100;
        this.img = this.imageCache['./img/1.Sharkie/3.Swim/1.png'];
        this.startEnergy = 100 * (1 + healthImprovement);
        this.energy = 100 * (1 + healthImprovement);
        this.isSlapping = false;
        this.isBubbling = false;
        this.isBubblingPoison = false;

        this.collectedCoins = 0;
        this.collectedPoisons = 0;
        this.killedByEndboss = false;
    }


    /**
     * @returns boolean - true, if more than 2.5 sec passed since last keyboard touch
     */
    isLongIdle() {
        let timePassed = new Date().getTime() - this.world.keyboard.lastKeyMove;
        return timePassed > 2500;
    }


    /**
     * reduces energy and indirectly starts "isHurt"-interval
     * currentImage set to 0 to start hurt animation with first image
     * lifeBar is updated
     */
    hit(o) {
        if (o instanceof JellyfishDangerous) {
            this.energy -= 20;
        } else if (o instanceof JellyfishNormal) {
            this.energy -= 10;
        } else {//pufferfish
            this.energy -= 5;
        }

        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();//in milliseconds
            this.lastHitBy = o;
        }

        this.world.lifeBar.showStatus(this.energy / this.startEnergy * 100);

        this.currentImage = 0;
        if (soundOn) {
            if (o instanceof Jellyfish) { this.shocked_sound.play(); }
            this.hurt_sound.play();
            if (this.isDead()) { this.dead_sound.play(); }
        }
    }


    /**
     * updates number of collected items and status bar
     * @param {object} o - collectable object
     */
    collect(o) {
        if (o instanceof Coin) {
            this.collectedCoins++;
            this.world.coinBar.showStatus(this.collectedCoins / this.world.level.totalCoins * 100);
            if (soundOn) { this.collectCoin_sound.play(); }
        } else {//poison
            this.collectedPoisons++;
            this.world.poisonBar.showStatus(this.collectedPoisons / this.world.level.totalPoisons * 100);
            if (soundOn) { this.collectPoison_sound.play(); }
        }
    }


    /**
     * movement,images and sound for character
     */
    animate() {
        this.animateMovement();
        this.animatePictures();
    }


    /**
     * animation of movement for character
     */

    // animate() {
    animateMovement() {
        this.animationIntervalMove = setInterval(() => {
            //if killed by endboss or jellyfish final image (bones) are positioned too high
            if (this.killedByEndboss && this.currentImage >= this.IMAGES_DEAD_ENDBOSS.length && this.collisionMaxY < 380
                || this.isDead() && this.lastHitBy instanceof Jellyfish && this.currentImage >= this.IMAGES_DEAD_SHOCK.length && this.collisionMaxY < 380) {
                //let bones fall to ground
                this.y += 5;
                this.calculateCollisionCoordinates();
            }

            this.swim_sound.pause();
            if (this.world.keyboard.right && this.x < this.world.background.endX) {
                this.x += this.speed;
                this.otherDirection = false;
                if (soundOn) { this.swim_sound.play(); }
            }
            if (this.world.keyboard.left && this.x > this.world.background.startX) {
                this.x -= this.speed;
                this.otherDirection = true;
                if (soundOn) { this.swim_sound.play(); }
            }
            if (this.world.keyboard.up && this.collisionMinY > 0) {
                this.y -= this.speed;
                if (soundOn) { this.swim_sound.play(); }
            }
            if (this.world.keyboard.down && this.collisionMaxY < 460) {
                this.y += this.speed;
                if (soundOn) { this.swim_sound.play(); }
            }
            this.world.camera_x = -this.x + 30;
        }, 1000 / 60);
    }


    /**
     * animation of images for character
     */
    animatePictures() {
        this.animationIntervalImg = setInterval(() => {
            if (this.world.endboss.attackFinished) {
                this.animateImagesDeath(this.IMAGES_DEAD_ENDBOSS);
                if (this.currentImage >= this.IMAGES_DEAD_ENDBOSS.length + 32) {
                    //short timeout after dead animation plus sinking bones
                    finishGame(false);
                }
            } else if (this.isDead() && this.lastHitBy instanceof Pufferfish) {
                this.animateImagesDeath(this.IMAGES_DEAD_POISONED);
                if (this.currentImage >= this.IMAGES_DEAD_POISONED.length + 20) {
                    //short timeout after dead animation (no sinking bones)
                    finishGame(false);
                }
            } else if (this.isDead() && this.lastHitBy instanceof Jellyfish) {
                this.animateImagesDeath(this.IMAGES_DEAD_SHOCK);
                if (this.currentImage >= this.IMAGES_DEAD_SHOCK.length + 32) {
                    //short timeout after dead animation plus sinking bones
                    finishGame(false);
                }
            } else if (this.isHurt()) {
                this.animateImages(this.IMAGES_HURT_POISONED);
            } else if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.up || this.world.keyboard.down) {
                this.animateImages(this.IMAGES_SWIM);
            } else if (this.isSlapping) {
                this.animateImagesOnce(this.IMAGES_ATTACK_FIN, 'isSlapping');
                if (soundOn) { this.slap_sound.play(); }
            } else if (this.isLongIdle()) {
                this.animateImages(this.IMAGES_LONG_IDLE);
            } else if (this.isBubbling) {
                this.animateBubbling();
            } else if (this.isBubblingPoison) {
                this.animateBubblingPoison();
            } else {
                this.animateImages(this.IMAGES_IDLE);
            }
        }, 100);
    }


    /**
     * shows images for producing bubble once (while isBubblingPoison is true)
     * and sets isBubbling to false
     * then a new instance of poisoned bubble is created with position dependent on direction of character
     * number of collected poisons and status bar is updated
     */
    animateBubblingPoison() {
        let bubble;
        this.animateImagesOnce(this.IMAGES_ATTACK_BUBBLE, 'isBubblingPoison');
        //when bubble producing animation is done
        if (!this.isBubblingPoison) {
            if (soundOn) { this.bubble_sound.play(); }
            if (this.otherDirection) {
                bubble = new PoisonedBubble(this.collisionMinX - 70, this.collisionMinY + 20, 'left');
            } else {
                bubble = new PoisonedBubble(this.collisionMaxX + 10, this.collisionMinY + 20, 'right');
            }
            this.world.bubbles.push(bubble);
            this.collectedPoisons--;
            this.world.poisonBar.showStatus(this.collectedPoisons / this.world.level.totalCoins * 100);
        }
    }


    /**
     * shows images for producing bubble once (while isBubbling is true)
     * and sets isBubbling to false
     * then a new instance of bubble is created with position dependent on direction of character
     */
    animateBubbling() {
        let bubble;
        this.animateImagesOnce(this.IMAGES_ATTACK_BUBBLE, 'isBubbling');
        //when bubble producing animation is done
        if (!this.isBubbling) {
            if (soundOn) { this.bubble_sound.play(); }
            if (this.otherDirection) {
                bubble = new Bubble(this.collisionMinX - 80, this.collisionMinY + 20, 'left');
            } else {
                bubble = new Bubble(this.collisionMaxX + 20, this.collisionMinY + 20, 'right');
            }
            this.world.bubbles.push(bubble);
        }
    }


    /**
     * stops the animation intervals for movement and images
     */
    stopAnimation() {
        clearInterval(this.animationIntervalMove);
        clearInterval(this.animationIntervalImg);
    }
}