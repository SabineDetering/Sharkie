class Level {
    enemies;
    collectableObjects;
    backgroundObjects;
    level_start_x = -680;
    level_end_x = 3 * 780;
    totalCoins;
    totalPoisons;

    constructor(enemies, collectableObjects, backgroundObjects) {
        this.enemies = enemies;
        this.collectableObjects = collectableObjects;
        this.backgroundObjects = backgroundObjects;
        this.totalCoins = this.countCoins();
        this.totalPoisons = this.countPoisons();
    }

    countCoins() {
        return this.collectableObjects.filter(o => o instanceof Coin).length;
    }
    countPoisons() {
        return this.collectableObjects.filter(o => o instanceof Poison).length;
    }
}