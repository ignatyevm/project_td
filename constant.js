const MAX_ACTIVE_ENEMIES = 5000;
const MAX_PLAYER_MONEY = 99999;
const MAX_ACTIVE_PLAYERS = 4;

const CANVAS_WIDTH = 900
const CANVAS_HEIGHT = 900;

const MAP_WIDTH = 25;
const MAP_HEIGHT = 25;

const SPRITE_WIDTH = 32;
const SPRITE_HEIGHT = 32;

const ENEMY_HITBOX = 16;

const BLOCK_SIZE = 32;
const HALF_PI = 90;

const START_PLAYER_HP = 20;
const START_PLAYER_MONEY = 500;

const BUILD_SECONDS = 10;

const ONLINE = 1;
const LOCAL = 0;

const BUILDING = 1;
const WAR = 2;

const ALIVE = 1;
const DEAD = 0;

const BASIC_ENEMY = ["sprites/mars/enemy_sprite/bug_1/bug_1_1.png", 100, 0.5, 1, 50];

const BASIC_ENEMY_HP = 100;
const BASIC_ENEMY_SPEED = 1;
const BASIC_ENEMY_DAMAGE = 1;
const BASIC_ENEMY_PRICE = 50;
const BASIC_ENEMY_SPRITE = "sprites/mars/enemy_sprite/bug_1/bug_1_1.png";

const BASIC_BULLET_SPEED = 5;
const BASIC_BULLET_SPRITE = "sprites/mars/bullets/res_bullet.png";

//FIRE RATE
// 50 - 1s
// 100 - 2s
// 25 - 0.5.s

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
					 [50, 40, 30],
					 [150, 200, 300],
					 [100, 110, 120]];

const AOE_TOWER = [["sprites/mars/tower_sprites/tower_2/magnit_gun_1.png",
					  "sprites/mars/tower_sprites/tower_2/magnit_gun_2.png",
					  "sprites/mars/tower_sprites/tower_2/magnit_gun_3.png"],
					 [50, 150, 300],
					 [50, 40, 30],
					 [150, 200, 300],
					 [100, 110, 120],
					 [30, 40, 50]];