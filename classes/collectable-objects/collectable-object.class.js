class CollectableObject extends MovableObject {
    
    //this is executed after super() !
    width = 40;
    height = 40;
    collisionWidth = this.width;
    collisionHeight = this.height;
    IMG;

    constructor() {
        super();
    }
}