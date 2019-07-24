
const MAP_HEIGHT = 75;
const MAP_WIDTH = 150;

class Map{

	constructor(game_field, map_id){

		/*let data_provider = new DataProvider(map_id);

		this.tower_locations = data_provider.read("tower_locations");
		this.headquarters = data_provider.read("headquarters");
		this.roads = data_provider.read("roads");*/

		let map_background = document.createElementNS("http://www.w3.org/2000/svg", "image");
		map_background.setAttributeNS(null, "x", "0");
		map_background.setAttributeNS(null, "y", "0");
		map_background.setAttributeNS("http://www.w3.org/1999/xlink", "href", "maps/map 1.png");
		game_field.appendChild(map_background);

	}

	render(){

		

	}
	
}

class MapBuilder{

	constructor(game_field){
		this.game_field = game_field;
	}

	generate_sprites_block(x, y, width, height, sprite_url){
		for(let i = x; i < x + width; i++){
			for(let j = y; j < y + height; j++){
				let pos = new Position(i, j, i * 16, j * 16);
				let sprite = new Sprite(pos, "sprites/towerDefense_tile024.png");
				sprite.render(this.game_field);
			}
		}
	}

	save(){

	}

}