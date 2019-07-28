
let sprites_link = {
	'x': "sprites/mars/map_sprites/ground.png", 
	'.': "sprites/mars/map_sprites/straight_road_g.png",
	',': "sprites/mars/map_sprites/straight_road_v.png",
	't': "sprites/mars/map_sprites/top_right_turn.png",
	'b': "sprites/mars/map_sprites/bottom_right_turn.png",};

class Map {

	constructor(width, height, map_src, drawer){
		this.width = width
		this.height = height;
		this.map_src = map_src;
		this.drawer = drawer;
	}

	render() {
		let local_drawer = this.drawer;

		for(let i = 0; i < this.width; i++) {
			for(let j = 0; j < this.height; j++) {
				let sprite = new Image();
				sprite.onload = function() {
					local_drawer.render(sprite, j * BLOCK_SIZE, i * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
				}
               	sprite.src = sprites_link[this.map_src[i][j]];
			}
		}
		
	}

}
