function level2() {
    const levelObjects = {
        enemies: [
            new Pufferfish('green', -430, 380, true, -400, 1000),
            new Pufferfish('red', -300, 160, true),
            new Pufferfish('orange', 0, 100, true),
            new Pufferfish('green', 500, 70),
            new Pufferfish('red', 900, 290, false, 0, 1200),
            new Pufferfish('orange', 1200, 180),
            new Pufferfish('green', 1400, 120),
            new Pufferfish('red', 2000, 300, false, 1550),
            new Pufferfish('orange', 3000, 370, false, 1600),
            new Pufferfish('green', 1800, 350, true, 1600),
            new JellyfishNormal('lila', -40, 400),
            new JellyfishDangerous('green', 1290, 250, 260),
            new JellyfishDangerous('pink', 2000, 100, 350),
            new JellyfishNormal('yellow', 2400, 200),
        ],
        collectableObjects:
            [
                new AnimatedPoison(-35, 395,1,-0.1),
                new Coin(400, 215, 1, -0.1),
                new Coin(740, 420, 1, -0.1),
                new Coin(950, 435, 1, -0.1),
                new Coin(1300, 305, 1, -0.1),
                new AnimatedPoison(1580, 435, 1, -0.1),
                new Coin(1730, 95, 1, -0.1),
                new Coin(2000, 135, 1, -0.1),
                new Coin(2000, 235, 1, -0.1),
                new Coin(2000, 335, 1, -0.1),
                new AnimatedPoison(2455, 430, 1, -0.1),
                new Poison(2830, 335, 'img/4.Marcadores/Posión/Dark - Left.png', 1, -0.1)
            ],
        startX: -680,
        endX: 5 * 780,
        backgroundObjects:
            [
                       new Barrier('./img/3.Background/Barrier/2.png', 1000, -0.1, 15)
            ]
    }
    return new Level(levelObjects.enemies,
        levelObjects.collectableObjects,
        levelObjects.startX,
        levelObjects.endX,
        levelObjects.backgroundObjects);
};