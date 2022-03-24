let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas,keyboard);
    ctx = canvas.getContext('2d');
}

window.addEventListener('keydown', (e) => {
    keyboard.lastKeyMove = new Date().getTime();
    console.log('keydown', keyboard.lastKeyMove);
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
    if (e.key == "Space") {
        keyboard.space = true;
    }
    // console.log(e);
});

window.addEventListener('keyup', (e) => {
    keyboard.lastKeyMove = new Date().getTime();
    console.log('keyup', keyboard.lastKeyMove);
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
    if (e.key == "Space") {
        keyboard.space = false;
    }
    // console.log(e);
});