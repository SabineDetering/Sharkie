let canvas;
let world;
let keyboard = new Keyboard();
let level;

function startGame(levelname) {
    document.getElementById('start-screen').style.display = "none";
    canvas = document.getElementById('canvas');
    switch (levelname) {
        case 'level1': level = initLevel1();
            break;
        case 'level2': level = initLevel2();
            break;
        default:
            console.log(levelname + ' is not defined.');
    }
    world = new World(canvas, keyboard, level);
    ctx = canvas.getContext('2d');
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
function showWinScreen() {
    document.getElementById('win-screen').style.display = "flex";
    document.getElementById('coin-text').innerHTML = `You have collected ${world.character.collectedCoins} coins.<br> Each coin will strengthen your health in the next level.`;
}
function showLooseScreen() {
    document.getElementById('loose-screen').style.display = "flex";
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