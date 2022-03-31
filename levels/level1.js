function level1() {
    const levelObjects = {
        enemies: [
            new PufferfishGreen(),
            new PufferfishOrange(),
            new PufferfishRed()
            /* new Jellyfish('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'),
             new Jellyfish('./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png'),
             new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png'),
             new Jellyfish('./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')*/
        ],
        collectableObjects:
            [
                new Coin(200, 400),
                new Coin(300, 350),
                new Poison(440, 430, 'img/4.Marcadores/Posión/Dark - Left.png'),
                new Poison(230, 430, 'img/4.Marcadores/Posión/Dark - Left.png'),
                new Poison(350, 430, 'img/4.Marcadores/Posión/Dark - Right.png')
            ]
    }
    return new Level(levelObjects.enemies, levelObjects.collectableObjects);
};