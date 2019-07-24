const FIELD_SIZE = 16;
const SPRITE_WIDTH = 32;
const SPRITE_HEIGHT = 32;

class Sprite{

	constructor(pos, sprite_url){

		this.pos = pos;
		this.sprite_url = sprite_url;

	}

	render(svg_container){
		let sprite = document.createElementNS("http://www.w3.org/2000/svg", "image");
		console.log(this.pos);	
		sprite.setAttribute("block_x",this.pos.block_x);
		sprite.setAttribute("block_y", this.pos.block_y);
		sprite.setAttribute("x", this.pos.x * FIELD_SIZE);
		sprite.setAttribute("y", this.pos.y * FIELD_SIZE);
		sprite.setAttribute("width", SPRITE_WIDTH);
		sprite.setAttribute("height", SPRITE_HEIGHT);
		sprite.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.sprite_url);
		svg_container.appendChild(sprite);
	}

}