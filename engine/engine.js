const FIELD_SIZE = 16;
const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 20;

var canvas = document.getElementById('game_field');
var ctx = canvas.getContext('2d');

let bX;
let bY;

canvas.addEventListener("mousemove", function(event){
	let x = event.clientX;
	let y = event.clientY;
	let bX = Math.floor(x / SPRITE_WIDTH);
	let by = Math.floor(y / SPRITE_HEIGHT);
	ctx.fillStyle = 'green';
	ctx.fillRect(SPRITE_WIDTH * bX, SPRITE_HEIGHT * bY, SPRITE_WIDTH, SPRITE_HEIGHT);
});







/*function mouseMoveHandler(e){
		let x = e.clientX;
		let y = e.ClientY;
		this.bX = x / SPRITE_WIDTH;
		this.by = y / SPRITE_HEIGHT;
}*/
const FIELD_SIZE = 16;
const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 20;

class ObjectPosition{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.block_x = x / SPRITE_WIDTH;
		this.block_y = x / SPRITE_HEIGHT;
	}
}

class GameObject{
	constructor(pos, image){
		this.pos = pos;
		this.image = image;
	}

	translate_pos(x, y){
		this.pos.x += x;
		this.pos.y += y;	
	}

	is_outmap(){
		if (this.pos.x >= canvas.width + SPRITE_WIDTH || this.pos.y >= canvas.height + SPRITE_HEIGHT 
			|| this.pos.x <= 0 - SPRITE_WIDTH || this.pos.y <= 0 - SPRITE_HEIGHT)
			return true;
		return false;
	}
}

function render_map(map_url) {
	var map = new Image();
	map.src = map_url;	
	ctx.drawImage(map, 0, 0);
}

function render_objects(objects){
	render_map(field_url);
	ctx.save();	
	for (i = 0; i < objects.length; ++i){
		if (objects[i].is_outmap()){
			objects.splice(i, 1);
			continue;
		}
		ctx.drawImage(objects[i].image, objects[i].pos.x, objects[i].pos.y, SPRITE_WIDTH, SPRITE_HEIGHT);
	}
	ctx.restore();
}