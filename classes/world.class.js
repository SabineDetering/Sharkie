class World {
    character = new Character();
    endboss = new Endboss();

    sharkie = new Picture(15, -25, 80, 90, './img/1.Sharkie/1.IDLE/1.png');
    lifeBar = new DynamicStatusBar(15, 35, 'life', 100);
    poisonBar = new DynamicStatusBar(15, 65, 'poison', 0);
    coinBar = new DynamicStatusBar(15, 95, 'coin', 0);

    bubbles = [];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    camera_y = 0;

    win_sound = new Audio('./audio/win.mp3');
    loose_sound = new Audio('./audio/loose.mp3');

    animationInterval;
    drawRepeat;

    constructor(canvas, keyboard, level) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.setWorld();
    }


    /**
     * allows character to access the properties of all objects in the world
     */
    setWorld() {
        this.character.world = this;
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
        this.camera_y = 0;
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
            //character can only collect, attack or be hurt if he is not dead or hurt
            if (!this.character.isDead() && !this.character.isHurt()) {
                this.characterActivities();
            }

            //barrier
            this.level.backgroundObjects.filter(o => o instanceof Barrier).forEach(barrier => {
                this.characterAvoidsBarrier(barrier);
            });

            //endboss
            this.characterMeetsEndboss();

            //bubbles
            this.bubbles.forEach(bubble => {
                this.bubbleContacts(bubble);
            });
        }, 1000 / 60);
    }


    /**
     * character activities that are only possible when character is not hurt or dead
     * colliding with enemies, slap attack, bubble attack, collecting items
     */
    characterActivities() {
        this.character.calculateCollisionCoordinates();

        //contact with enemies
        this.level.enemies.forEach((enemy) => {
            enemy.calculateCollisionCoordinates();
            if (enemy instanceof Pufferfish) {
                this.characterMeetsPufferfish(enemy);
            } else {//Jellyfish
                this.characterMeetsJellyfish(enemy);
            }
        });

        // starting bubble attack
        if (this.keyboard.b) {
            this.normalBubbleAttack();
        }
        if (this.keyboard.v) {
            this.poisonedBubbleAttack();
        }

        //collect items
        this.level.collectableObjects.forEach((object) => {
            this.characterMeetsCollectableObject(object);
        });
    }



    /**
     * collisions with pufferfish that were not slapped hit character (and hurt him)
     * if pufferfish is in a good position for slapping and space-key is pressed, it is slapped
     * 'flight' direction depends on swimming direction of character
     * @param {object} pufferfish 
     */
    characterMeetsPufferfish(pufferfish) {
        if (this.hurtingCollisionWithPufferfish(pufferfish)) {
            this.character.hit(pufferfish);
        } else if (this.keyboard.space && pufferfish.isSlapped(this.character)) {
            //slapping is only possible if character is not colliding
            //wait is true until slapping animation of character is done
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
    //slapped enemies don't hurt
    hurtingCollisionWithPufferfish(pufferfish) {
        return this.character.isColliding(pufferfish) && !pufferfish.slappedNormal && !pufferfish.slappedInverse;
    }


    /**
     * 
     * @param {object} jellyfish - jellyfish
     */
    characterMeetsJellyfish(jellyfish) {
        if (this.character.isColliding(jellyfish)) {
            console.log('collision', jellyfish, this.character.energy);
            this.character.hit(jellyfish);
        }
    }

    /**
     * causes starting a normal bubble attack if character is not in progress of producing a bubble     * 
     * sets character.currentImage to 0 to start animation with first image
     */
    normalBubbleAttack() {
        if (!this.character.isBubbling && !this.character.isBubblingPoison) {
            this.character.isBubbling = true;
            this.character.currentImage = 0;
        }
    }


    /**
     * causes starting a poisoned bubble attack if character is not in progress of producing a bubble
     * poisoned bubbles are only possible if character has poison available
     * otherwise a normal bubbling is started
     * sets character.currentImage to 0 to start animation with first image
     */
    poisonedBubbleAttack() {
        if (!this.character.isBubbling && !this.character.isBubblingPoison) {
            if (this.character.collectedPoisons > 0) {
                this.character.isBubblingPoison = true;
            } else { this.character.isBubbling = true; }
            this.character.currentImage = 0;
        }
    }


    /**
     * if character collides with object it is counted as collected and deleted from collectable objects
     * @param {object} object - collectable object
     */
    characterMeetsCollectableObject(object) {
        if (this.character.isColliding(object)) {
            this.character.collect(object);
            object.delete(this.level.collectableObjects, object);
        }
    }


    /**
     * lets character swim around barrier
     * @param {object} barrier 
     */
    characterAvoidsBarrier(barrier) {
        if (this.character.isColliding(barrier)) {
            this.character.barrierCollision = true;
            this.character.calcDistanceToBarrierEnd(barrier);
        }
    }


    /**
     * endboss animation is started when character approaches his position
     * endboss attack is started when character comes too close 
     * after endboss attack, character death animation is started
     */
    characterMeetsEndboss() {
        if (this.character.collisionMaxX >= this.endboss.x - 280) {
            this.endboss.startAnimation(); //endboss is introduced                  
        }

        this.endboss.calculateCollisionCoordinates();

        if (this.character.collisionMaxX > this.endboss.collisionMinX - this.endboss.attackDistance && !this.endboss.attacking) {
            this.endbossStartsAttack();
        }

        this.characterAfterEndbossAttack();
    }


    /**
     * lets endboss start attacking character
     * sets endboss.currentImage to 0 to start animation with first image
     */
    endbossStartsAttack() {
        this.endboss.currentImage = 0;
        this.endboss.isAttacking(this.character);
        if (soundOn) { this.endboss.attack_sound.play(); }
    }


    /**
     * after attack by endboss parameters of character are set to initiate death
     * sets character.currentImage to 0 to start animation with first image
     */
    characterAfterEndbossAttack() {
        if (this.endboss.attackFinished && !this.character.killedByEndboss) {
            this.character.killedByEndboss = true;
            if (soundOn) { this.character.dead_sound.play(); }
            this.character.currentImage = 0;
            this.character.energy = 0;
            this.lifeBar.showStatus(0);
        }
    }


    /**
     * deletes bubble when vertically out of sight
     * checks for bubble collisions with endboss or enemies
     * @param {object} bubble 
     */
    bubbleContacts(bubble) {
        bubble.calculateCollisionCoordinates();
        if (bubble.collisionMaxY < 0) {
            bubble.delete(this.bubbles, bubble);
        } else if (this.endboss.isColliding(bubble)) {
            this.bubbleMeetsEndboss(bubble);
        } else {
            this.level.enemies.forEach(enemy => {
                this.bubbleMeetsEnemy(bubble, enemy);
            });
        }
    }


    /**
     * when bubble meets endboss, only poisoned bubbles hurt him (by calling endboss.hit())
     * bubble is deleted
     * @param {*} bubble 
     */
    bubbleMeetsEndboss(bubble) {
        if (bubble.type == 'poisoned' && !this.endboss.isDead()) {
            this.endboss.hit();
            if (soundOn) { this.character.bubble_sound.play(); }
        }
        bubble.delete(this.bubbles, bubble);
    }


    /**
     * when colliding with pufferfish, bubble is deleted
     * when colliding with jellyfish, jellyfish is trapped so that appearance of bubble changes and jellyfish is deleted
     * @param {object} bubble 
     * @param {object} enemy 
     */
    bubbleMeetsEnemy(bubble, enemy) {
        if (bubble.isColliding(enemy)) {
            if (enemy instanceof Pufferfish) {
                bubble.delete(this.bubbles, bubble);
            } else {//bubble meets jellyfish
                bubble.withJelly(enemy.color);
                enemy.delete(this.level.enemies, enemy);
            }
            if (soundOn) { this.character.bubble_sound.play(); }
        }
    }


    /**
     * main function for drawing objects
     */
    draw() {
        //clear canvas completely to enable redrawing
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addBackgroundObjectsToCanvas(this.level.backgroundObjects);
        this.addBackgroundObjectsToCanvas(this.level.collectableObjects);

        //move coordinates to position of character before drawing
        this.ctx.translate(this.camera_x, 0);

        this.addToCanvas(this.character);
        this.addToCanvas(this.endboss);
        this.addObjectsToCanvas(this.level.enemies);
        this.addObjectsToCanvas(this.bubbles);

        //move coordinates back to normal after drawing
        this.ctx.translate(- this.camera_x, 0);

        //static elements (foreground)
        this.addStaticToCanvas(this.sharkie);
        this.addStaticToCanvas(this.lifeBar);
        this.addStaticToCanvas(this.coinBar);
        this.addStaticToCanvas(this.poisonBar);
        // statusbar for endboss is first shown when he is introduced
        if (!this.endboss.wait) {
            this.addStaticToCanvas(this.endboss.whale);
            this.addStaticToCanvas(this.endboss.lifeBarEndboss);
        }

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
     * draws all (background) objects of an array
     * @param {array} objects -array of (background) objects
     */
    addBackgroundObjectsToCanvas(objects) {
        objects.forEach(o => {
            this.addBackgroundToCanvas(o);
        })
    }


    /**
     * draws a single (background) object
     * position of object is calculated relative to position of character (=camera_x, camera_y) to create an illusion of perspective
     * @param {object} o - (background) object
     */
    addBackgroundToCanvas(o) {
        let x = o.x + this.camera_x * o.relativeSpeedX;
        let y = o.y + this.camera_y * o.relativeSpeedY;
        this.ctx.drawImage(o.img, x, y, o.width, o.height);
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