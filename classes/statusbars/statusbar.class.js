class StatusBar extends DrawableObject {
    x = 15;
    width=150;
    height = 37.5;
    percentage;

    showStatus(percentage) {
        this.percentage = percentage;
        let index = Math.ceil(this.percentage / 20);
        let path = this.IMAGES[index];
        this.img = this.imageCache[path];
    }  
}