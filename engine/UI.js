var canvas = document.getElementById('game_field');
var ctx = canvas.getContext('2d');

let bX;
let bY;

canvas.addEventListener("mousemove", function(event) {
	let x = event.clientX;
	let y = event.clientY;
	let bX = Math.floor(x / SPRITE_WIDTH);
	let by = Math.floor(y / SPRITE_HEIGHT);
	ctx.fillStyle = 'green';
	ctx.fillRect(SPRITE_WIDTH * bX, SPRITE_HEIGHT * bY, SPRITE_WIDTH, SPRITE_HEIGHT);
});
