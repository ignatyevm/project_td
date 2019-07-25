class Render {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.map = new Image();
	}

	set_map(map_url) {
		this.map.src = map_url;	
	}

	render_map() {
		this.ctx.drawImage(this.map, 0, 0); 	
	}

	render_objects(objects) {	
		this.ctx.save();	
		for (let i = 0; i < objects.length; ++i){
			if (objects[i].is_outmap()){
				objects.splice(i, 1);
				continue;
			}
			this.ctx.drawImage(objects[i].image, objects[i].pos.x, objects[i].pos.y, SPRITE_WIDTH, SPRITE_HEIGHT);
		}
		this.ctx.restore();
	}
}