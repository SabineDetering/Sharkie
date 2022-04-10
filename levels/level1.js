function level1() {
    const levelObjects = {
        enemies: [
            new Pufferfish('green',-400, 360, true),
            new Pufferfish('red',-300, 160, true),
            new Pufferfish('orange',0, 100,true),
            new Pufferfish('green',320, 190),
            new Pufferfish('orange',420, 70),
            new Pufferfish('red',500, 260),
            new Pufferfish('red',800, 320),
            new Pufferfish('orange',1000, 280),
            new Pufferfish('orange',1120, 70),
            new Pufferfish('green',1320, 190),
            new Pufferfish('red',1600, 280),
            new Pufferfish('red',1950, 90),
            new Pufferfish('orange',2400, 130),
            new Pufferfish('green',2600, 180),
            new Pufferfish('red',3000, 80),
            new Pufferfish('orange',3400, 240),
            new Pufferfish('green',3600, 320)
        ],
        collectableObjects:
            [
                new Coin(200, 415, 1, -0.1),
                new Coin(650, 265, 1, -0.1),
                new Coin(1100, 315, 1, -0.1),
                new Coin(1200, 235, 1, -0.1),
                new Coin(1300, 195, 1, -0.1),
                new Coin(1400, 235, 1, -0.1),
                new Coin(1500, 315, 1, -0.1),
                new Coin(1800, 215, 1, -0.1),
                new AnimatedPoison(-15, 395, 1, -0.1),
                new AnimatedPoison(565, 310, 1, -0.1),
                new Poison(700, 445, 'img/4.Marcadores/Posión/Dark - Left.png', 1, -0.1),
                new AnimatedPoison(1310, 340, 1, -0.1),
                new Poison(1700, 415, 'img/4.Marcadores/Posión/Dark - Right.png', 1, -0.1),
                new AnimatedPoison(2135, 315, 1, -0.1)
            ],
        startX: -680,
        endX: 4 * 780,
        backgroundObjects:
            [
                new BackgroundObject('./img/3.Background/Layers/5.Water/D-complete.png', -780, 0.8, 6 * 780),
                new BackgroundObject('./img/3.Background/Layers/4.Fondo_2/D-complete.png', -780, 0.5, 6 * 780),
                new BackgroundObject('./img/3.Background/Layers/3.Fondo_1/D-complete.png', -780, 0.75, 6 * 780, -0.05),
                new BackgroundObject('./img/3.Background/Layers/2.Floor/D-complete.png', -780, 1, 6 * 780, -0.1,15),
                new BackgroundObject('./img/3.Background/Layers/1.Light/COMPLETO.png', -780, 0.5, 3 * 780)
            ]
    }
    return new Level(levelObjects.enemies,
        levelObjects.collectableObjects,
        levelObjects.startX,
        levelObjects.endX,
        levelObjects.backgroundObjects);
};