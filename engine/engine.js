const FIELD_SIZE = 16;
const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 20;

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

function render_map(map_url) {
	var map = new Image();
	map.src = map_url;	
	ctx.drawImage(map, 0, 0);
}

class Position {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class GameObject {
	constructor(pos, sprite_url) {
		this.pos = pos;
		this.sprite_url = sprite_url;
	}

	translate_pos(x, y) {
		this.pos.x += x;
		this.pos.y += y;	
	}

	is_outmap() {
		if (this.pos.x > canvas.width + SPRITE_WIDTH || this.pos.y > canvas.height + SPRITE_HEIGHT 
			|| this.pos.x < - SPRITE_WIDTH || this.pos.y < - SPRITE_HEIGHT)
			return true;
		return false;
	}
	
	render(image) {
		if (this.is_outmap())
			return false;
		render_map("maps/map_4.png");
		image.src = this.sprite_url;
		ctx.save();
		ctx.restore();
		ctx.drawImage(image, this.pos.x, this.pos.y, SPRITE_WIDTH, SPRITE_HEIGHT);
		return true;
	}

}

class MapManager {
	constructor(static_image, source_str) {
		this.static_image = static_image;
		this.width = WIDTH;
		this.height = HEIGHT;
		this.map_container = new Array(this.height);
		for(let i = 0; i < WIDTH; i++) {
			this.map_container[i] = new Array(this.width);
			for(let j = 0; j < HEIGHT; j++) {
				this.map_container[i][j] = CHAR_TO_SPRITE[source_str[i][j]];
			}
		}
	}
}	

render_map("maps/map_4.png");
var image = new Image();
var pos = new Position(0, 20, 0, 0);
var object = new GameObject(pos, "sprites/towerDefense_tile271.png");
var id_timer = setInterval(function(){object.translate_pos(1, 0); object.render(image, ctx, 1, 0)}, 16)