let canvas;
let character = new Image();
let ctx;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.src = '../img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png';
    ctx.drawImage(character, 20, 20, 50, 100)
}