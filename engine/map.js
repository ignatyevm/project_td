"use strict";

class PathManager {
	constructor(finish_pos, path) {
		this.finish_pos = finish_pos;
		this.path = path;
	}

	get_next_step(enemy_pos) {
		if (enemy_pos.x == this.finish_pos.x && enemy_pos.y == this.finish_pos.y) return false;
		return this.path[enemy_pos.x][enemy_pos.y]; 
	}
}

var start_pos = new Position(0, 0);
var road_index = new Array(36);
for (let i = 0; i < 36; ++i) {
 	road_index[i] = new Array(36);
}

road_index[0][0] = new Position(0, 1);
road_index[1][0] = new Position(1, 1);
road_index[1][1] = new Position(1, 2);
road_index[1][2] = new Position(2, 2);

let enemy = new Enemy(0, 0, 0, new Position(0, 0), "sprites/enemies/enemy_first_plane.png", 0, 0);

enemy.move(road_index);

const WIDTH = 36;
const HEIGHT = 36;
const CHAR_UP = ".";
const CHAR_FILL = "#";
const CHAR_ROAD = "0";
const CHAR_LEFT = "n";
const CHAR_DOWN = "c";
const CHAR_RIGHT = "z";
const CHAR_LEFT_UP = "s";
const CHAR_LEFT_DOWN = "x";
const CHAR_RIGHT_DOWN = "b";
const CHAR_LEFT_UP_TURN = "m";
const CHAR_RIGHT_UP_TURN = "v";
const CHAR_LEFT_DOWN_TURN = "d";
const CHAR_RIGHT_DOWN_TURN = "a";

const CHAR_TO_SPRITE = {
	".": "sprites/towerDefense_tile080.png",
	"x": "sprites/towerDefense_tile081.png",
	"#": "sprites/towerDefense_tile129.png",
	"0": "sprites/towerDefense_tile034.png",
	"z": "sprites/towerDefense_tile104.png",
	"c": "sprites/towerDefense_tile126.png",
	"v": "sprites/towerDefense_tile083.png",
	"b": "sprites/towerDefense_tile079.png",
	"n": "sprites/towerDefense_tile102.png",
	"m": "sprites/towerDefense_tile082.png",
	"a": "sprites/towerDefense_tile106.png",
	"s": "sprites/towerDefense_tile127.png",
	"d": "sprites/towerDefense_tile105.png",
	"f": "sprites/towerDefense_tile125.png",
}

var mas = new CreateMap(1);