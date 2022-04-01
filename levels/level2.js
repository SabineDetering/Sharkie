function level2() {
    const levelObjects = {
        enemies: [
            new PufferfishGreen(320, 190),
            new PufferfishOrange(420, 70),
            new PufferfishRed(500, 260),
            new PufferfishRed(800, 320),
            new PufferfishOrange(1000, 280),
            new PufferfishGreen(1320, 190),
            new PufferfishOrange(1120, 70),
            new PufferfishRed(1800, 260),
            new PufferfishOrange(2400, 120),
            new PufferfishGreen(2600, 180),
            new JellyfishNormal('lila', -15, 400),
            new JellyfishNormal('yellow', 680, 100)
            // new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png'),
            // new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')
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
                new AnimatedPoison(-15, 380),
                new Poison(230, 430, 'img/4.Marcadores/Posión/Dark - Left.png'),
                new Poison(440, 300, 'img/4.Marcadores/Posión/Dark - Left.png'),
                new AnimatedPoison(1300, 320),
                new Poison(750, 430, 'img/4.Marcadores/Posión/Dark - Right.png'),
                new Poison(1400, 400, 'img/4.Marcadores/Posión/Dark - Right.png')
            ]
    }
    return new Level(levelObjects.enemies, levelObjects.collectableObjects);
};