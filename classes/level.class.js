class Level {
    enemies;
    collectableObjects;
    totalCoins;
    totalPoisons;

    constructor(enemies, collectableObjects) {
        this.enemies = enemies;
        this.collectableObjects = collectableObjects;
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