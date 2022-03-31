class World {
    background = new Background();
    character = new Character();
    endboss = new Endboss();
    sharkie = new Picture(15, -25, 80, 90,'./img/1.Sharkie/1.IDLE/1.png');
    lifeBar = new LifeBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    whale = new Picture(555, -20, 70, 80, './img/2.Enemy/3 Final Enemy/2.floating/1.png');
    bubbles = [];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard,level) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.endOfGame = endOfGame;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;//allows character to use all variables of world
    }

    startAnimation() {
        this.character.animate();
        this.level.enemies.forEach(o => { o.animate(); });
    }
    
    
    stopAnimation() {
        this.character.stopAnimation();
        this.endboss.stopAnimation();
        // console.log('endboss animation stopped');
        this.level.enemies.forEach(o => { o.delete(this.level.enemies, o) });
        this.level.collectableObjects.forEach(o => { o.delete(this.level.collectableObjects, o) });
        this.bubbles.forEach(o => { o.delete(this.bubbles, o) });
    }


    reset() {
        this.camera_x = 0;
        this.endOfGame = endOfGame;
        this.character.reset();
        this.endboss.reset();
        this.lifeBar.reset();
        this.poisonBar.showStatus(0);
        this.coinBar.showStatus(0);
    }

    run() {
        setInterval(() => {
            if (!this.endOfGame) {
                //character can only act if it is not dead or hurt
                if (!this.character.isDead() && !this.character.isHurt()) {

                    this.character.calculateCollisionCoordinates();

                    if (this.endboss.attackFinished && !this.character.killedByEndboss) {
                        this.character.killedByEndboss = true;
                        this.character.currentImage = 0;
                        this.character.energy = 0;
                        this.lifeBar.showStatus(0);
                    }

                    this.level.enemies.forEach((enemy) => {
                        enemy.calculateCollisionCoordinates();

                        if (this.character.isColliding(enemy) && !enemy.slappedNormal && !enemy.slappedInverse) {//slapped enemies don't hurt 
                            // console.log('collision', enemy, this.character.energy);
                            this.character.hit();
                        } else if (this.keyboard.space && enemy.isSlapped(this.character)) {//slapping is only possible if character is not colliding
                            // console.log('slapped');
                            enemy.wait = true;
                            if (this.character.otherDirection) {
                                enemy.slappedInverse = true;
                            } else {
                                enemy.slappedNormal = true;
                            }
                        } else if (enemy.y < 0) {
                            enemy.delete(this.level.enemies, enemy)
                        }
                    });
                }

                // bubble attack
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

                //collect items
                this.level.collectableObjects.forEach((object) => {
                    object.calculateCollisionCoordinates();
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
                }

                //bubbles
                this.bubbles.forEach(bubble => {
                    bubble.calculateCollisionCoordinates();
                    if (bubble.collisionMaxY < 0) {
                        bubble.delete(this.bubbles, bubble);
                    } else if (this.endboss.isColliding(bubble)) {//bubble meets endboss
                        if (bubble instanceof PoisonedBubble) {
                            this.endboss.hit(bubble);
                        }
                        bubble.delete(this.bubbles, bubble);
                    } else {
                        this.level.enemies.forEach(enemy => {
                            if (bubble.isColliding(enemy)) {//bubble meets enemy
                                if (enemy instanceof Pufferfish) {
                                    bubble.delete(this.bubbles, bubble);
                                } else {//bubble meets jellyfish
                                    bubble.withJelly(enemy.constructor.name);
                                }
                            }
                        });
                    }

                });
            }
        }, 1000 / 60);
    }



    draw() {
        //clear canvas completely to enable redrawing
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);//move coordinates to position of character before drawing

        this.addStaticObjectsToCanvas(this.background.backgroundObjects);
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
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToCanvas(objects) {
        objects.forEach(o => {
            this.addToCanvas(o);
        })
    }

    addToCanvas(mo) {
        if (mo.otherDirection) {
            mo.flipImage(ctx);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            mo.flipImageBack(ctx);
        }
    }
    addStaticObjectsToCanvas(objects) {
        objects.forEach(o => {
            this.addStaticToCanvas(o);
        })
    }
    addStaticToCanvas(o) {
        o.draw(this.ctx);
    }

}