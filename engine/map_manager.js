
const CHAR_ROAD = ".";
const CHAR_BLOCK = "x";
const CHAR_TOWER = "#";
const CHAR_BASE = "0";

const CHAR_TO_SPRITE = {
	".": "towerDefense_tile001.png",
	"x": "towerDefense_tile002.png",
	"#": "towerDefense_tile003.png",
	"0": "towerDefense_tile004.png",
}

class MapManager{

	constructor(static_image, source_str){

		this.static_image = static_image;
		this.width = 20;
		this.height = 20;

		this.map_container = new Array(this.height);

		for(let i = 0; i < 20; i++){
			this.map_container[i] = new Array(this.width);
			for(let j = 0; j < 20; j++){
				this.map_container[i][j] = CHAR_TO_SPRITE[source_str[i][j]];
			}
		}

	}



}