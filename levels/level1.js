const level1 = new Level(
    [//enemies
        new PufferfishGreen('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'),
        new PufferfishOrange('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'),
        new PufferfishRed('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png'),
        new Endboss(),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png'),
        new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')
    ],
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
);