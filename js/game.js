

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