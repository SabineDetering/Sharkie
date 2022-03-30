let canvas;
let world;
let keyboard = new Keyboard();
let currentLevel = 1;
let level;//level object
let levelFunctions = [initLevel1, initLevel2];
let coinsCollectedinLevels = [0];
let endOfGame = false;

function getId(id) {
    return document.getElementById(id);
}

function initGame() {
    canvas = getId('canvas');
    ctx = canvas.getContext('2d');
    level = levelFunctions[0]();
    world = new World(canvas, keyboard, level);
}

function initLevel(levelNumber) {
    currentLevel = levelNumber;
    endOfGame = false;
    world.reset();
    level = levelFunctions[levelNumber - 1]();
    world.level = level;
}


/**
 * starts the animation of all visible movable objects in the world
 * @param {integer} levelNumber 
 */
function startLevel(levelNumber) {
    // console.log('Level ', levelNumber, ' started');
    getId(`level${levelNumber}-screen`).style.display = "none";
    getId('instruction-screen').style.display = "none";
    world.startAnimation();
}


function finishGame(playerWins) {
    if (!world.endOfGame) {
        // console.log('finish executed');
        world.endOfGame = true;
        world.stopAnimation();
        if (playerWins) {
            showWinScreen();
        } else {
            showLooseScreen();
        }
    }
}


/**
 * displays screen with story according to level
 * preloads level objects (no animation)
 * @param {integer} levelNumber 
 */
function showStartScreen(levelNumber) {
    getId('loose-screen').style.display = "none";
    getId('win-screen').style.display = "none";
    getId(`level${levelNumber}-screen`).style.display = "block";
    if (levelNumber == 1) {
        initGame();
    } else {
        initLevel(levelNumber);
    }
}


function showInstructions(levelNumber) {
    getId('instruction-screen').style.display = "block";
    getId(`level${levelNumber}-screen`).style.display = "none";
    getId('start-btn').setAttribute('onclick', `startLevel(${levelNumber})`);
}


function showWinScreen() {
    getId('win-screen').style.display = "flex";
    getId('coin-text').innerHTML = `You have collected ${world.character.collectedCoins} coins.<br> Each coin will strengthen your health in the next level.`;
    coinsCollectedinLevels[currentLevel] = world.character.collectedCoins;
    getId('restart-btn').setAttribute('onclick', `showStartScreen(${currentLevel})`);
    getId('next-btn').setAttribute('onclick', `showStartScreen(${currentLevel + 1})`);
}


function showLooseScreen() {
    getId('loose-screen').style.display = "flex";
    getId('again-btn').setAttribute('onclick', `showStartScreen(${currentLevel})`);
}



window.addEventListener('keydown', (e) => {
    keyboard.lastKeyMove = new Date().getTime();
    // console.log('keydown', keyboard.lastKeyMove);
    if (e.key == "ArrowLeft") {
        keyboard.left = true;
    }
    if (e.key == "ArrowRight") {
        keyboard.right = true;
    }
    if (e.key == "ArrowUp") {
        keyboard.up = true;
    }
    if (e.key == "ArrowDown") {
        keyboard.down = true;
    }
    if (e.key == " ") {
        keyboard.space = true;
    }
    if (e.key == "b") {
        keyboard.b = true;
    }
    if (e.key == "v") {
        keyboard.v = true;
    }
    // console.log(e);
});

window.addEventListener('keyup', (e) => {
    keyboard.lastKeyMove = new Date().getTime();
    // console.log('keyup', keyboard.lastKeyMove);
    if (e.key == "ArrowLeft") {
        keyboard.left = false;
    }
    if (e.key == "ArrowRight") {
        keyboard.right = false;
    }
    if (e.key == "ArrowUp") {
        keyboard.up = false;
    }
    if (e.key == "ArrowDown") {
        keyboard.down = false;
    }
    if (e.key == " ") {
        keyboard.space = false;
    }
    if (e.key == "b") {
        keyboard.b = false;
    }
    if (e.key == "v") {
        keyboard.v = false;
    }
    // console.log(e);
});