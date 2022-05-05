let canvas;
let world;
let keyboard = new Keyboard();
let background;
let currentLevel = 1;
let level;//level object
let levelFunctions = [level1, level2];
let endX;
let healthImprovement = 0;
let soundOn = true;
let fullscreenOn = false;
let gameRunning = false;

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
    getId('canvas').style.display = "none";
    getId('small-instructions').style.display = "none";
    getId('settings-on-canvas').style.display = "none";
    getId(`level${levelNumber}-screen`).style.display = "flex";
    setFullscreenIcon(levelNumber);
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
    background = new Background();
    level = levelFunctions[0]();
    endX = level.endX;
    world = new World(canvas, keyboard, background, level);
    background_sound = new Audio('./audio/under_water.mp3');
    background_sound.loop = true;
}


/**
 * adds a new instance of level to the world with all level specific objects
 * level specific background objects are added to the standard background 
 * all other objects remain from the level before and are only reset
 * @param {integer} levelNumber 
 */
function initLevel(levelNumber) {
    currentLevel = levelNumber;
    level = levelFunctions[levelNumber - 1]();
    world.level = level;
    endX = level.endX;
    world.reset();
    world.backgroundObjects = background.backgroundObjects.concat(world.level.backgroundObjects);
}


function showInstructions(levelNumber) {
    getId('instruction-screen').style.display = "flex";
    getId(`level${levelNumber}-screen`).style.display = "none";
    getId('start-btn').setAttribute('onclick', `startLevel(${levelNumber})`);
    setFullscreenIcon(0);
    setVolumeIcon(0);
}


function showHelp() {
    getId('help-screen').style.display = "flex";
}


function hideHelp() {
    getId('help-screen').style.display = "none";
}

function showLegal() {
    hideHelp();
    getId('legal-screen').style.display = "flex";
}


function hideLegal() {
    getId('legal-screen').style.display = "none";
}


/**
 * starts the animation of all visible movable objects in the world and shows canvas
 * @param {integer} levelNumber 
 */
function startLevel(levelNumber) {
    // console.log('Level ', levelNumber, ' started');
    getId(`level${levelNumber}-screen`).style.display = "none";
    getId('instruction-screen').style.display = "none";
    setFullscreenIcon(-1);
    setVolumeIcon(-1);
    getId('small-instructions').style.display = "flex";
    getId('settings-on-canvas').style.display = "flex";
    canvas = getId('canvas');
    canvas.style.display = "block";
    if (fullscreenOn) {
        canvas.requestFullscreen();
    }
    if (soundOn) {
        background_sound.play();
    }
    gameRunning = true;
    world.startAnimation();
}


/**
 * when game is finished
 * all animations are stopped
 * dependent on the outcome, either win screen or loose screen is shown
 * @param {boolean} playerWins - true if Sharkie survived endboss
 */
function finishGame(playerWins) {
    console.log('finish executed');

    gameRunning = false;
    if (fullscreenOn) {
        document.exitFullscreen();
    }
    world.stopAnimation();
    background_sound.pause();

    if (playerWins) {
        showWinScreen();
    } else {
        showLooseScreen();
    }
}


function showWinScreen() {
    if (soundOn) { world.win_sound.play(); }
    getId('small-instructions').style.display = "none";
    getId('settings-on-canvas').style.display = "none";
    getId('win-screen').style.display = "flex";
    getId('coin-text').innerHTML = `You have collected ${world.character.collectedCoins} of ${world.level.totalCoins} coins.<br> Each coin will improve your health in the next level.`;
    //collecting all coins improves health in next game by 50%
    healthImprovement = world.character.collectedCoins / world.level.totalCoins / 2;

    if (currentLevel == levelFunctions.length) {
        getId('next-btn').style.display = "none";
    } else {
        getId('next-btn').style.display = "block";
        getId('next-btn').setAttribute('onclick', `showStartScreen(${currentLevel + 1})`);
    }
    getId('restart-btn').setAttribute('onclick', `showStartScreen(${currentLevel})`);
    delete this.level;
}


function showLooseScreen() {
    if (soundOn) { world.loose_sound.play(); }
    getId('small-instructions').style.display = "none";
    getId('settings-on-canvas').style.display = "none";
    getId('loose-screen').style.display = "flex";
    healthImprovement = 0;

    getId('again-btn').setAttribute('onclick', `showStartScreen(${currentLevel})`);
    delete this.level;
}


function toggleVolume(number) {
    soundOn = !soundOn;
    setVolumeIcon(number);
    if (number == -1 && soundOn) {
        background_sound.play();
    }
    if (number == -1 && !soundOn) {
        background_sound.pause();
    }
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


document.addEventListener('fullscreenchange', checkFullscreen);

function checkFullscreen() {
    if (document.fullscreenElement) {
        console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
    } else {
        console.log('Leaving fullscreen mode.');
        if (fullscreenOn && gameRunning) {
            toggleFullscreen(-1);
        }
    }
}


function toggleFullscreen(number) {
    fullscreenOn = !fullscreenOn;
    setFullscreenIcon(number);
    if (fullscreenOn && gameRunning) {
        canvas.requestFullscreen();
    }
}


function setFullscreenIcon(number) {
    fullscreen = getId('fullscreen' + number);
    if (fullscreenOn) {
        fullscreen.src = "./img/fullscreen-exit.png";
        fullscreen.alt = "play game on small screen";
        fullscreen.title = "play game on small screen";
    } else {
        fullscreen.src = "./img/fullscreen.png";
        fullscreen.alt = "play game on full screen";
        fullscreen.title = "play game on full screen";
    }
}