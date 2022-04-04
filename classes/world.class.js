class World {
    character = new Character();
    endboss = new Endboss();
    sharkie = new Picture(15, -25, 80, 90, './img/1.Sharkie/1.IDLE/1.png');
    lifeBar = new LifeBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    whale = new Picture(555, -20, 70, 80, './img/2.Enemy/3 Final Enemy/2.floating/1.png');
    bubbles = [];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    win_sound = new Audio('./audio/win.mp3');
    loose_sound = new Audio('./audio/loose.mp3');

    animationInterval;
    drawRepeat;

    constructor(canvas, keyboard, level) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        // this.draw();
        this.setWorld();
        // this.run();
    }

    setWorld() {
        this.character.world = this;//allows character to use all variables of world
    }


    /**
     * starts animation functions for character, enemies and world
     * animation for endboss is started when he shows up
     */
    startAnimation() {
        this.character.animate();
        this.level.enemies.forEach(o => { o.animate(); });
        this.draw();
        this.run();
    }


    /**
     * stops all animation functions 
     * enemies, collectable objects and bubbles are deleted
     */
    stopAnimation() {
        this.character.stopAnimation();
        this.endboss.stopAnimation();
        this.level.enemies.forEach(o => { o.delete(this.level.enemies, o) });
        this.level.collectableObjects.forEach(o => { o.delete(this.level.collectableObjects, o) });
        this.bubbles.forEach(o => { o.delete(this.bubbles, o) });
        clearInterval(this.animationInterval);
        cancelAnimationFrame(this.drawRepeat);
    }


    /**
     * resets properties of objects that are present in all levels
     */
    reset() {
        this.camera_x = 0;
        this.character.reset();
        this.endboss.reset();
        this.lifeBar.reset();
        this.poisonBar.showStatus(0);
        this.coinBar.showStatus(0);
    }


    /**
     * main function for interactions between objects
     */
    run() {
        this.animationInterval = setInterval(() => {
            //character can only act if it is not dead or hurt
            if (!this.character.isDead() && !this.character.isHurt()) {

                this.character.calculateCollisionCoordinates();

                this.characterMeetsEndboss();

                this.level.enemies.forEach((enemy) => {
                    enemy.calculateCollisionCoordinates();
                    if (enemy instanceof Pufferfish) {
                        this.characterMeetsPufferfish(enemy);
                    } else {//Jellyfish
                        this.characterMeetsJellyfish(enemy);
                    }
                });
            }

            // starting bubble attack
            if (this.keyboard.b) {
                if (!this.character.isBubbling && !this.character.isBubblingPoison) {
                    this.character.isBubbling = true;
                    this.character.currentImage = 0;
                }
            }
            if (this.keyboard.v) {
                if (!this.character.isBubbling && !this.character.isBubblingPoison) {
                    if (this.character.collectedPoisons > 0) {
                        this.character.isBubblingPoison = true;
                    } else { this.character.isBubbling = true; }
                    this.character.currentImage = 0;
                }
            }

            //barrier
            this.level.backgroundObjects.filter(o => o instanceof Barrier).forEach(barrier => {
                if (this.character.isColliding(barrier)) {
                    this.character.barrierCollision = true;
                    this.character.calcDistanceToBarrierEnd(barrier);
                }
            });

            //collect items
            this.level.collectableObjects.forEach((object) => {
                if (this.character.isColliding(object)) {
                    this.character.collect(object);
                    object.delete(this.level.collectableObjects, object);
                }
            });

            //endboss
            if (this.character.collisionMaxX >= this.endboss.x - 250) {
                this.endboss.startAnimation(); //endboss is introduced                  
            }
            this.endboss.calculateCollisionCoordinates();
            if (this.character.collisionMaxX > this.endboss.collisionMinX - 70 && !this.endboss.attack) {
                this.endboss.currentImage = 0;
                this.endboss.isAttacking(this.character);
                if (soundOn) { this.endboss.attack_sound.play(); }
            }

            //bubbles
            this.bubbles.forEach(bubble => {
                bubble.calculateCollisionCoordinates();
                if (bubble.collisionMaxY < 0) {
                    bubble.delete(this.bubbles, bubble);
                } else if (this.endboss.isColliding(bubble)) {//bubble meets endboss
                    if (bubble.type == 'poisoned') {
                        this.endboss.hit();
                        if (soundOn) { this.character.bubble_sound.play(); }
                    }
                    bubble.delete(this.bubbles, bubble);
                } else {
                    this.level.enemies.forEach(enemy => {
                        if (bubble.isColliding(enemy)) {//bubble meets enemy
                            if (enemy instanceof Pufferfish) {
                                bubble.delete(this.bubbles, bubble);
                            } else {//bubble meets jellyfish
                                bubble.withJelly(enemy.color);
                                enemy.delete(this.level.enemies, enemy);
                            }
                            if (soundOn) { this.character.bubble_sound.play(); }
                        }
                    });
                }

            });
        }, 1000 / 60);
    }


    /**
     * after attack by endboss parameters of character are set to initiate death
     */
    characterMeetsEndboss() {
        if (this.endboss.attackFinished && !this.character.killedByEndboss) {
            this.character.killedByEndboss = true;
            if (soundOn) { this.character.dead_sound.play(); }
            this.character.currentImage = 0;
            this.character.energy = 0;
            this.lifeBar.showStatus(0);
        }
    }


    /**
     * collisions with pufferfish that were not slapped hit character (and hurt him)
     * 
     * @param {object} pufferfish 
     */
    characterMeetsPufferfish(pufferfish) {
        if (this.character.isColliding(pufferfish) && !pufferfish.slappedNormal && !pufferfish.slappedInverse) {//slapped enemies don't hurt
            this.character.hit(pufferfish);
        } else if (this.keyboard.space && pufferfish.isSlapped(this.character)) {
            //slapping is only possible if character is not colliding
            pufferfish.wait = true;
            if (this.character.otherDirection) {
                pufferfish.slappedInverse = true;
            } else {
                pufferfish.slappedNormal = true;
            }
        } else if (pufferfish.collisionMaxY < 0) {
            //slapped out of sight
            pufferfish.delete(this.level.enemies, pufferfish)
        }
    }


    /**
     * 
     * @param {object} jellyfish - jellyfish
     */
    characterMeetsJellyfish(jellyfish){
        if (this.character.isColliding(jellyfish)) {
            console.log('collision', jellyfish, this.character.energy);
            this.character.hit(jellyfish);
        }
}

    /**
     * main function for drawing objects
     */
    draw() {
        //clear canvas completely to enable redrawing
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);//move coordinates to position of character before drawing

        this.addStaticObjectsToCanvas(this.level.backgroundObjects);
        this.addStaticObjectsToCanvas(this.level.collectableObjects);
        this.addToCanvas(this.character);
        this.addToCanvas(this.endboss);
        this.addObjectsToCanvas(this.level.enemies);
        this.addObjectsToCanvas(this.bubbles);

        this.ctx.translate(- this.camera_x, 0);//move coordinates back to normal after drawing

        //static elements (foreground)
        this.addStaticToCanvas(this.sharkie);
        this.addStaticToCanvas(this.lifeBar);
        this.addStaticToCanvas(this.coinBar);
        this.addStaticToCanvas(this.poisonBar);
        this.addStaticToCanvas(this.whale);
        this.addStaticToCanvas(this.endboss.lifeBarEndboss);

        let self = this;
        this.drawRepeat = requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * draws all (movable) objects of an array
     * @param {array} objects - array of movable objects
     */
    addObjectsToCanvas(objects) {
        objects.forEach(o => {
            this.addToCanvas(o);
        })
    }

    /**
     * draws a single movable object
     * flips the image if object doesn't move in its standard direction
     * @param {object} mo - movable object
     */
    addToCanvas(mo) {
        if (mo.otherDirection) {
            mo.flipImage(ctx);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            mo.flipImageBack(ctx);
        }
    }


    /**
     * draws all objects of an array
     * these objects don't have a direction
     * @param {array} objects - array of objects
     */
    addStaticObjectsToCanvas(objects) {
        objects.forEach(o => {
            this.addStaticToCanvas(o);
        })
    }


    /**
     * draws a single object without direction
     * @param {object} o -  object
     */
    addStaticToCanvas(o) {
        o.draw(this.ctx);
    }

}