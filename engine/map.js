let sprites_link = {'x': "sprites/towerDefense_tile024.png", '.': "sprites/towerDefense_tile093.png"};

class Map {

	constructor(width, height, map_src, drawer) {
		this.width = width;
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