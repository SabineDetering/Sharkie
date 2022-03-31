let canvas;
let world;
let keyboard = new Keyboard();
let currentLevel = 1;
let level;//level object
let levelFunctions = [level1, level2];
let coinsCollectedinLevels = [0];
let endOfGame = false;
let soundOn = true;

function getId(id) {
    return document.getElementById(id);
}

function initGame() {
    canvas = getId('canvas');
    ctx = canvas.getContext('2d');
    level = levelFunctions[0]();
    world = new World(canvas, keyboard, level);
    background_sound = new Audio('./audio/under_water.mp3');
    background_sound.loop = true;
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
    if (soundOn) { background_sound.play(); }
}


function finishGame(playerWins) {
    if (!world.endOfGame) {
        // console.log('finish executed');
        world.endOfGame = true;
        world.stopAnimation();
        background_sound.pause();
        if (playerWins) {
            showWinScreen();
            if (soundOn) { world.win_sound.play(); }
            if (currentLevel == levelFunctions.length) {
                getId('next-btn').style.display = "none";
            } else {
                getId('next-btn').style.display = "block";
            }

        } else {
            showLooseScreen();
            if (soundOn) {world.loose_sound.play();}
        }
    }
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
    if (onload) {
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

function toggleFullscreen() {

    var elem = document.getElementById("wrapper");
   
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    
    // div.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    // div.mozRequestFullScreen();
    // div.msRequestFullscreen();
    // div.requestFullscreen(); // standard

    // document.webkitExitFullscreen();
    // document.mozCancelFullScreen();
    // document.msExitFullscreen();
    // document.exitFullscreen();

    // window.onload = function () {

    //     // object containing configuration options
    //     let gameConfig = {
    //         type: Phaser.AUTO,
    //         scale: {
    //             mode: Phaser.Scale.FIT,
    //             autoCenter: Phaser.Scale.CENTER_BOTH,
    //             parent: "thegame",
    //             width: 1334,
    //             height: 750
    //         },
    //         scene: [preloadGame, playGame],
    //         backgroundColor: 0x0c88c7,

    //         // physics settings
    //         physics: {
    //             default: "arcade"
    //         }
    //     }
    //     game = new Phaser.Game(gameConfig);
    //     window.focus();
    // }

    // if (!this.scale.isFullscreen) {
    //     this.scale.startFullscreen();
}

function toggleVolume() {
    soundOn = !soundOn;
    volume = getId('volume');
    if (soundOn) {
        volume.src = "img/volume-off.png";
        volume.alt = "sound off";
        volume.title = "sound off";
    } else {
        volume.src = "img/volume-on.png";
        volume.alt = "sound on";
        volume.title = "sound on";
    }
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