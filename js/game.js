let canvas;
let world;
let keyboard = new Keyboard();
let currentLevel = 1;
let level;//level object
let levelFunctions = [level1, level2];
let endX;
let healthImprovement = 0;
let soundOn = true;

//helper function
function getId(id) {
    return document.getElementById(id);
}


/**
 * displays screen with story according to level
 * preloads level objects (no animation)
 * @param {integer} levelNumber 
 */
function showStartScreen(levelNumber, onload = false) {
    getId('loose-screen').style.display = "none";
    getId('win-screen').style.display = "none";
    getId(`level${levelNumber}-screen`).style.display = "flex";
    setVolumeIcon(levelNumber);
    if (onload) {
        initGame();
    } else {
        initLevel(levelNumber);
    }
}

/**
 * initialises game
 */
function initGame() {
    canvas = getId('canvas');
    ctx = canvas.getContext('2d');
    level = levelFunctions[0]();
    endX = level.endX;
    world = new World(canvas, keyboard, level);
    background_sound = new Audio('./audio/under_water.mp3');
    background_sound.loop = true;
}


/**
 * adds a new instance of level to the world with all level specific objects
 * @param {integer} levelNumber 
 */
function initLevel(levelNumber) {
    currentLevel = levelNumber;
    level = levelFunctions[levelNumber - 1]();
    world.level = level;
    endX = level.endX;
    world.reset();
}



function showInstructions(levelNumber) {
    getId('instruction-screen').style.display = "block";
    getId(`level${levelNumber}-screen`).style.display = "none";
    getId('start-btn').setAttribute('onclick', `startLevel(${levelNumber})`);
}


/**
 * starts the animation of all visible movable objects in the world and shows canvas
 * @param {integer} levelNumber 
 */
function startLevel(levelNumber) {
    // console.log('Level ', levelNumber, ' started');
    getId(`level${levelNumber}-screen`).style.display = "none";
    getId('instruction-screen').style.display = "none";
    getId('canvas').style.display = "block";
    world.startAnimation();
    if (soundOn) { background_sound.play(); }
}


/**
 * when game is finished
 * all animations are stopped
 * dependent on the outcome, either win screen or loose screen is shown
 * @param {boolean} playerWins - true if Sharkie survived endboss
 */
function finishGame(playerWins) {
    console.log('finish executed');
    world.stopAnimation();
    background_sound.pause();
    if (playerWins) {
        showWinScreen();
        //collecting all coins improves health in next game by 50%
        healthImprovement = world.character.collectedCoins / world.level.totalCoins / 2;
        if (soundOn) { world.win_sound.play(); }
        if (currentLevel == levelFunctions.length) {
            getId('next-btn').style.display = "none";
        } else {
            getId('next-btn').style.display = "block";
        }
    } else {
        showLooseScreen();
        if (soundOn) { world.loose_sound.play(); }
        healthImprovement = 0;
    }
}


function showWinScreen() {
    getId('win-screen').style.display = "flex";
    getId('coin-text').innerHTML = `You have collected ${world.character.collectedCoins} of ${world.level.totalCoins} coins.<br> Each coin will improve your health in the next level.`;
    getId('restart-btn').setAttribute('onclick', `showStartScreen(${currentLevel})`);
    getId('next-btn').setAttribute('onclick', `showStartScreen(${currentLevel + 1})`);
    delete this.level;
}


function showLooseScreen() {
    getId('loose-screen').style.display = "flex";
    getId('again-btn').setAttribute('onclick', `showStartScreen(${currentLevel})`);
    delete this.level;
}


function toggleVolume(number) {
    soundOn = !soundOn;
    setVolumeIcon(number);
}


function setVolumeIcon(number) {
    volume = getId('volume' + number);
    if (soundOn) {
        volume.src = "./img/volume-off.png";
        volume.alt = "sound off";
        volume.title = "sound off";
    } else {
        volume.src = "./img/volume-on.png";
        volume.alt = "sound on";
        volume.title = "sound on";
    }
}


window.addEventListener('keydown', (e) => {
    keyboard.lastKeyMove = new Date().getTime();
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