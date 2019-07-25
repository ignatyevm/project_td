const FIELD_SIZE = 16;
const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 20;

var id_timer;
var images = new Image();

class Position{
	constructor(x, y, block_x, block_y){
		this.x = x;
		this.y = y;
		this.block_x = block_x;
		this.block_y = block_y;
	}
}

class GameObject{
	constructor(pos, sprite_url, game_field){
		this.ctx = game_field.getContext("2d");
		this.pos = pos;
		this.sprite_url = sprite_url;
	}

	translate_pos(x, y){
		this.pos.x += x;
		this.pos.y += y;	
	}
	
	render(image){
		image.src = this.sprite_url;
		this.ctx.save();
		this.ctx.fillRect(0, 0, ctx.width, ctx.height);
		this.ctx.restore();
		this.ctx.drawImage(image, this.pos.x, this.pos.y, SPRITE_WIDTH, SPRITE_HEIGHT);
	}
}

(function draw_object(){
	var game_field = document.getElementById("game_field");
	let pos = new Position(0, 0, 0, 0);
	var object = new GameObject(pos, "sprites/towerDefense_tile270.png", game_field, 10, 10, 10);
	object.translate_pos(4, 0);
	id_timer = setInterval(function(){object.translate_pos(1, 0); object.render(images)}, 75);
})()