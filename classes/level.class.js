class Level {
    enemies;
    collectableObjects;
    startX;
    endX;
    backgroundObjects;
    totalCoins;
    totalPoisons;

    constructor(enemies, collectableObjects,startX,endX,backgroundObjects) {
        this.enemies = enemies;
        this.collectableObjects = collectableObjects;
        this.startX = startX;
        this.endX = endX;
        this.backgroundObjects = backgroundObjects;
        this.totalCoins = this.countCoins();
        this.totalPoisons = this.countPoisons();
    }

    countCoins() {
        return this.collectableObjects.filter(o => o instanceof Coin).length;
    }
    countPoisons() {
        return this.collectableObjects.filter(o => o instanceof Poison || o instanceof AnimatedPoison).length;
    }
}