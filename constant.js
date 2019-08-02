const MAX_ACTIVE_ENEMIES = 5000;
const MAX_PLAYER_MONEY = 99999;
const MAX_ACTIVE_PLAYERS = 4;

const CANVAS_WIDTH = 768;
const CANVAS_HEIGHT = 768;

const MAP_WIDTH = 24;
const MAP_HEIGHT = 24;

const SPRITE_WIDTH = 32;
const SPRITE_HEIGHT = 32;

const ENEMY_HITBOX = 20;

const BLOCK_SIZE = 32;
const HALF_PI = 90;

const START_PLAYER_HP = 20;
const START_PLAYER_MONEY = 1000;

const BUILD_SECONDS = 30;

const ONLINE = 1;
const LOCAL = 0;

const BUILDING = 1;
const WAR = 2;

const ALIVE = 1;
const DEAD = 0;

const BASIC_ANIMATION_SPEED = 9;

const BACKGROUND_MAP = "sprites/mars/map_sprites/Map.png";

const BASIC_BULLET_SPEED = 5;
const BASIC_BULLET_SPRITE = "sprites/mars/bullets/res_bullet.png";

//FIRE RATE
// 50 - 1s
// 100 - 2s
// 25 - 0.5.s 

const BASIC_ENEMY = ["sprites/mars/enemy_sprite/bugs/bug_1_1.png",
					 "sprites/mars/enemy_sprite/bugs/bug_1_2.png",
					 1, 1, 50, 150];

const ANT_ENEMY = ["sprites/mars/enemy_sprite/bugs/bug_2_1.png",
				   "sprites/mars/enemy_sprite/bugs/bug_2_2.png",
				   1, 1.5, 250, 200];

const BIGBOY_ENEMY = ["sprites/mars/enemy_sprite/bugs/bug_3_1.png",
				   	   "sprites/mars/enemy_sprite/bugs/bug_3_2.png",
				   	   1, 0.75, 500, 500];

const BASIC_TOWER = [["sprites/mars/tower_sprites/tower_1/tower1_level_1.png",
					  "sprites/mars/tower_sprites/tower_1/tower1_level_2.png",
					  "sprites/mars/tower_sprites/tower_1/tower1_level_3.png"],
					 [25, 50, 100],
					 [0.5, 0.4, 0.3],
					 [100, 200, 300],
					 [100, 110, 120]];

const MAGNIT_TOWER = [["sprites/mars/tower_sprites/tower_2/magnit_gun_1.png",
					  "sprites/mars/tower_sprites/tower_2/magnit_gun_2.png",
					  "sprites/mars/tower_sprites/tower_2/magnit_gun_3.png"],
					 [20, 60, 120],
					 [0.8, 0.75, 0.5],
					 [150, 200, 300],
					 [100, 110, 120]];

const AOE_TOWER = [["sprites/mars/tower_sprites/tower_3/aоe_gun_1.png",
					  "sprites/mars/tower_sprites/tower_3/aоe_gun_2.png",
					  "sprites/mars/tower_sprites/tower_3/aоe_gun_3.png"],
					 [50, 150, 300],
					 [2, 1.25, 0.75],
					 [150, 200, 300],
					 [100, 110, 120],
					 [30, 40, 50]];

const BASE_COORDINATE = [[0, 0], [21 * BLOCK_SIZE, 23 * BLOCK_SIZE], [0, 21 * BLOCK_SIZE], [23 * BLOCK_SIZE, 0]]


const PATH_FOUR_TO_ONE = [[11, 23, -1, 0], [11, 14, 0, -1], [13, 14, 1, 0],
 		  	   			  [13, 9, 0, -1], [7, 9, -1, 0], [7, 2, 0, -1],
 			   			  [2, 2, -1, 0], [2, 10, 0, 1], [-1, 10, -1, 0],
 			  			  [-1, -1, 0, -1], [0, 0, 0, 0]]

const PATH_ONE_TO_FOUR = [[11, 23, -1, 0], [11, 14, 0, -1], [13, 14, 1, 0],
 		  	   			  [13, 9, 0, -1], [7, 9, -1, 0], [7, 2, 0, -1],
 			   			  [2, 2, -1, 0], [2, 10, 0, 1], [-1, 10, -1, 0],
 			  			  [-1, -1, 0, -1], [0, 0, 0, 0]]