class Character extends MovableObject {
    height = 340;
    width = 360;
    x = 0;
    y = 100;
    collisionOffsetX = 75;
    collisionOffsetY = 160;
    collisionWidth = 210;
    collisionHeight = 90;

    speed = 1;

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
    ]
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
        this.loadImages(this.IMAGES_DEAD_POISONED);
        this.animate();
    }
    animate() {
        //Movement
        setInterval(() => {
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
            if (this.world.keyboard.up) {
                this.y -= this.speed;
                this.swim_sound.play();
            }
            if (this.world.keyboard.down) {
                this.y += this.speed;
                this.swim_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        //Image animation 
        setInterval(() => {
            if (this.isDead()) {
                this.currentImage = 0;
                this.animateImagesDeath(this.IMAGES_DEAD_POISONED);
            } else if (this.isHurt()) {
                this.animateImages(this.IMAGES_HURT_POISONED);
            }
            else if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.up || this.world.keyboard.down) {
                this.animateImages(this.IMAGES_SWIM);
            } else if (this.isLongIdle()) {
                this.animateImages(this.IMAGES_LONG_IDLE);
            }
            else {
                this.animateImages(this.IMAGES_IDLE);
            }
        }, 100);
    }
}