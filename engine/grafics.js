class Render {
	constructor(map_canvas, game_canvas) {
		this.map_canvas = map_canvas;
		this.game_canvas = game_canvas;
		this.map_ctx = this.map_canvas.getContext('2d');
		this.game_ctx = this.game_canvas.getContext('2d');
	}

	set_map(map){
		this.map = map;
	}

	draw(ctx, img, x, y){
		ctx.drawImage(img, x, y, SPRITE_WIDTH, SPRITE_HEIGHT);
	}

	render_map(ctx) {
		let local_map = this.map;
		let local_map_ctx = this.map_ctx;
		let local_draw = this.draw;
		for(let i = 0; i < HEIGHT; ++i){
	        for(let j = 0; j < WIDTH; ++j){
            	let sprite = new Image();
            	sprite.onload = function(){
            		local_draw(local_map_ctx, sprite, j * SPRITE_WIDTH, i * SPRITE_HEIGHT);
            	}
        		sprite.src = CHAR_TO_SPRITE[this.map.mas[i][j]];
            }
        }
	}

	render_objects(objects) {	
		this.ctx.save();
		for (let i = 0; i < objects.length; ++i){
			this.ctx.drawImage(objects[i].image, objects[i].pos.x, objects[i].pos.y, SPRITE_WIDTH, SPRITE_HEIGHT);
		}
		this.ctx.restore();
	}
}