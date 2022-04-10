function level2() {
    const levelObjects = {
        enemies: [
            new Pufferfish('green',-400, 360, true, -400, 1000),
            new Pufferfish('red',-300, 160, true),
            new Pufferfish('orange',0, 100, true),
            new Pufferfish('green',500, 70),
            new Pufferfish('red',900, 290, false, 0, 1200),
            new Pufferfish('orange',1200, 180),
            new Pufferfish('green',1400, 120),
            new Pufferfish('red',2000, 300, false, 1550),
            new Pufferfish('orange',3000, 370, false, 1600),
            new Pufferfish('green',1800, 350, true, 1600),
            new JellyfishNormal('lila', -40, 400),
            new JellyfishDangerous('green', 1290, 250, 260),
            new JellyfishDangerous('pink', 2000, 100, 350),
            new JellyfishNormal('yellow', 2400, 200),
        ],
        collectableObjects:
            [
                new AnimatedPoison(-35, 380),
                new Coin(400, 200),
                new Coin(740, 405),
                new Coin(950, 420),
                new Coin(1300, 290),
                new AnimatedPoison(1580, 420),
                new Coin(1730, 80),
                new Coin(2000, 120),
                new Coin(2000, 220),
                new Coin(2000, 320),
                new AnimatedPoison(2455, 415),
                new Poison(2830, 320, 'img/4.Marcadores/Posión/Dark - Left.png')
            ],
        startX: -680,
        endX: 5 * 780,
        backgroundObjects:
            [
                new BackgroundObject('./img/3.Background/Layers/5.Water/D-complete.png', -780, 0.8, 6 * 780),
                new BackgroundObject('./img/3.Background/Layers/4.Fondo_2/D-complete.png', -780, 0.5, 6 * 780),
                new BackgroundObject('./img/3.Background/Layers/3.Fondo_1/D-complete.png', -780, 0.75, 6 * 780),
                new BackgroundObject('./img/3.Background/Layers/2.Floor/D-complete.png', -780, 1, 6 * 780),
                new BackgroundObject('./img/3.Background/Layers/1.Light/COMPLETO.png', -780, 0.5, 3 * 780),

                new Barrier('./img/3.Background/Barrier/2.png', 1000)
            ]
    }
    return new Level(levelObjects.enemies,
        levelObjects.collectableObjects,
        levelObjects.startX,
        levelObjects.endX,
        levelObjects.backgroundObjects);
};