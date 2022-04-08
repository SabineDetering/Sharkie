class DynamicStatusBar extends DrawableObject {
    x = 15;
    width = 150;
    height = 37.5;
    percentage;
    barWidth = 130;
    type;
    icon;
    emptyBar;
    filledBar;
    color;

    constructor(x, y, type, startvalue, color = 'green') {
        super();
        this.icon = new Picture(x, y, 38, 38, `./img/4.Marcadores/${type}.png`);
        this.emptyBar = new Picture(x + 21, y + 16, this.barWidth, 15, `./img/4.Marcadores/empty.png`);
        this.filledBar = new Picture(x + 22, y + 17, this.barWidth * startvalue / 100, 13, `./img/4.Marcadores/full-${color}.png`);
    }


    showStatus(percentage) {
        this.filledBar.width = this.barWidth * percentage / 100;
    }


    draw(ctx) {
        ctx.drawImage(this.emptyBar.img, this.emptyBar.x, this.emptyBar.y, this.emptyBar.width, this.emptyBar.height);
        ctx.drawImage(this.filledBar.img, this.filledBar.x, this.filledBar.y, this.filledBar.width, this.filledBar.height);
        ctx.drawImage(this.icon.img, this.icon.x, this.icon.y, this.icon.width, this.icon.height);
    }


    /**
     * only relevant for lifebar
     */
    reset() {
        this.barWidth = 130 * (1 + healthImprovement);
        this.emptyBar.width = this.barWidth;
        this.showStatus(100);
    }
}