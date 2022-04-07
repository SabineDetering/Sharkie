class DynamicStatusBar extends DrawableObject {
    x = 15;
    width = 150;
    height = 37.5;
    percentage;

    type;
    icon;
    emptyBar;
    filledBar;

    constructor(x, y, type, startvalue) {
        super();
        this.icon = new Picture(x, y, 38, 38, `./img/4.Marcadores/${type}.png`);
        this.emptyBar = new Picture(x + 19, y + 19, 130, 15, `./img/4.Marcadores/empty.png`);
        this.filledBar = new Picture(x + 19, y + 19, 130*startvalue/100, 15, `./img/4.Marcadores/full-green.png`);
    }


    showStatus(percentage) {
        
    }
   


    draw(ctx) {
        ctx.drawImage(this.emptyBar.img, this.emptyBar.x, this.emptyBar.y, this.emptyBar.width, this.emptyBar.height);
        ctx.drawImage(this.filledBar.img, this.filledBar.x, this.filledBar.y, this.filledBar.width, this.filledBar.height);
        ctx.drawImage(this.icon.img, this.icon.x, this.icon.y, this.icon.width, this.icon.height);
    }

}