class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    lifeBar = new LifeBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    bubbles = [];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;//allows character to use all variables of world
    }

    run() {
        setInterval(() => {
            //character can only act if it is not dead or hurt
            if (!this.character.isDead() && !this.character.isHurt()) {
                this.character.calculateCollisionCoordinates();

                this.level.enemies.forEach((enemy) => {
                    enemy.calculateCollisionCoordinates();

                    if (this.character.isColliding(enemy) && !enemy.slappedNormal && !enemy.slappedInverse) {//slapped enemies don't hurt 
                        // console.log('collision', enemy, this.character.energy);
                        this.character.hit();
                    } else if (this.keyboard.space && enemy.isSlapped(this.character)) {//slapping is only possible if character is not colliding
                        console.log('slapped');
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
                if (!this.character.isBubbling) {
                    this.character.isBubbling = true;
                    this.character.currentImage = 0;
                }
            }
            if (this.keyboard.v) {
                if (!this.character.isBubblingPoison) {
                    this.character.isBubblingPoison = true;
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
            this.endboss.calculateCollisionCoordinates();

            //bubbles
            this.bubbles.forEach(bubble => {
                bubble.calculateCollisionCoordinates();
                if (bubble.collisionMaxY < 0) {
                    bubble.delete(this.bubbles, bubble);
                } else if (this.endboss.isColliding(bubble)) {
                    if (bubble instanceof PoisonedBubble) {
                        this.endboss.hit(bubble);
                    }
                    bubble.delete(this.bubbles, bubble);
                }

            });

        }, 1000 / 60);
    }



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

        this.addStaticToCanvas(this.lifeBar);
        this.addStaticToCanvas(this.coinBar);
        this.addStaticToCanvas(this.poisonBar);

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