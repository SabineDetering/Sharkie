class StatusBar extends DrawableObject {
    x = 15;
    width=200;
    height = 50;
    percentage;

    showStatus(percentage) {
        this.percentage = percentage;
        let index = Math.floor(this.percentage / 20);
        let path = this.IMAGES[index];
        this.img = this.imageCache[path];
    }  
}