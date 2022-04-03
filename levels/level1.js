function level1() {
    const levelObjects = {
        enemies: [
            new PufferfishGreen(-600, 360),
            new PufferfishRed(-200, 160),
            new PufferfishOrange(-100, 290),
            new PufferfishGreen(320, 190),
            new PufferfishOrange(420, 70),
            new PufferfishRed(500, 260),
            new PufferfishRed(800, 320),
            new PufferfishOrange(1000, 280),
            new PufferfishOrange(1120, 70),
            new PufferfishGreen(1320, 190),
            new PufferfishRed(1600, 280),
            new PufferfishRed(1950, 90),
            new PufferfishOrange(2400, 130),
            new PufferfishGreen(2600, 180),
            new PufferfishRed(3000, 80),
            new PufferfishOrange(3400, 240),
            new PufferfishGreen(3600, 320)
        ],
        collectableObjects:
            [
                new Coin(200, 400),
                new Coin(650, 250),
                new Coin(1100, 300),
                new Coin(1200, 220),
                new Coin(1300, 180),
                new Coin(1400, 220),
                new Coin(1500, 300),
                new Coin(1800, 200),
                new AnimatedPoison(-15, 380),
                new Poison(440, 300, 'img/4.Marcadores/Posión/Dark - Left.png'),
                new Poison(700, 430, 'img/4.Marcadores/Posión/Dark - Left.png'),
                new AnimatedPoison(1310, 325),
                new Poison(1700, 400, 'img/4.Marcadores/Posión/Dark - Right.png'),
                new AnimatedPoison(2110, 310)
            ],
        startX: -680,
        endX: 4 * 780,
        backgroundObjects:
            [
                new BackgroundObject('./img/3.Background/Layers/5.Water/D2.png', -780),
                new BackgroundObject('./img/3.Background/Layers/4.Fondo_2/D2.png', -780),
                new BackgroundObject('./img/3.Background/Layers/3.Fondo_1/D2.png', -780),
                new BackgroundObject('./img/3.Background/Layers/2.Floor/D2.png', -780),
                new BackgroundObject('./img/3.Background/Layers/1.Light/2.png', -780),

                new BackgroundObject('./img/3.Background/Layers/5.Water/D1.png', 0),
                new BackgroundObject('./img/3.Background/Layers/4.Fondo_2/D1.png', 0),
                new BackgroundObject('./img/3.Background/Layers/3.Fondo_1/D1.png', 0),
                new BackgroundObject('./img/3.Background/Layers/2.Floor/D1.png', 0),
                new BackgroundObject('./img/3.Background/Layers/1.Light/1.png', 0),
                new BackgroundObject('./img/3.Background/Layers/5.Water/D2.png', 780),
                new BackgroundObject('./img/3.Background/Layers/4.Fondo_2/D2.png', 780),
                new BackgroundObject('./img/3.Background/Layers/3.Fondo_1/D2.png', 780),
                new BackgroundObject('./img/3.Background/Layers/2.Floor/D2.png', 780),
                new BackgroundObject('./img/3.Background/Layers/1.Light/2.png', 780),

                new BackgroundObject('./img/3.Background/Layers/5.Water/D1.png', 2 * 780),
                new BackgroundObject('./img/3.Background/Layers/4.Fondo_2/D1.png', 2 * 780),
                new BackgroundObject('./img/3.Background/Layers/3.Fondo_1/D1.png', 2 * 780),
                new BackgroundObject('./img/3.Background/Layers/2.Floor/D1.png', 2 * 780),
                new BackgroundObject('./img/3.Background/Layers/1.Light/1.png', 2 * 780),
                new BackgroundObject('./img/3.Background/Layers/5.Water/D2.png', 3 * 780),
                new BackgroundObject('./img/3.Background/Layers/4.Fondo_2/D2.png', 3 * 780),
                new BackgroundObject('./img/3.Background/Layers/3.Fondo_1/D2.png', 3 * 780),
                new BackgroundObject('./img/3.Background/Layers/2.Floor/D2.png', 3 * 780),
                new BackgroundObject('./img/3.Background/Layers/1.Light/2.png', 3 * 780)
            ]
    }
    return new Level(levelObjects.enemies,
        levelObjects.collectableObjects,
        levelObjects.startX,
        levelObjects.endX,
        levelObjects.backgroundObjects);
};