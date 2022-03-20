class Level{
    enemies;
    backgroundObjects;
    level_start_x = -680;
    level_end_x = 3 * 780;

    constructor(enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}