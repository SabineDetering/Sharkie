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

function startGame(levelNumber) {
    currentLevel = levelNumber;
    endOfGame = false;
    canvas = getId('canvas');
    ctx = canvas.getContext('2d');
    level = levelFunctions[levelNumber - 1]();
    world = new World(canvas, keyboard, level);
    getId('level1-screen').style.display = "none";
    getId('level2-screen').style.display = "none";
    getId('win-screen').style.display = "none";
    getId('loose-screen').style.display = "none";
}

async function finishGame(playerWins) {
    if (!world.endOfGame) {
        // console.log('finish executed');
        world.endOfGame = true;
        if (playerWins) {
            showWinScreen();
        } else {
            showLooseScreen();
        }
    }
}


function showStartScreen(levelNumber) {
    getId('loose-screen').style.display = "none";
    getId('win-screen').style.display = "none";
    getId(`level${levelNumber}-screen`).style.display = "block";
}


function showInstructions(levelNumber) {

}


function showWinScreen() {
    getId('win-screen').style.display = "flex";
    getId('coin-text').innerHTML = `You have collected ${world.character.collectedCoins} coins.<br> Each coin will strengthen your health in the next level.`;
    coinsCollectedinLevels[currentLevel] = world.character.collectedCoins;
    getId('restart-btn').setAttribute('onclick', `startGame(${currentLevel})`);
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