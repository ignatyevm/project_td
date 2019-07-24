const NUMBER_OF_ENEMY = 1;
const ROUND_DELAY = 1000;
const INCOME_DELAY = 1000;
const MAX_PLAYER_MONEY = 99999;
const START_PLAYER_HP = 20;
const START_PLAYER_MONEY = 200;
const TEST_ENEMY_HP = 500;
const TEST_ENEMY_SPEED = 10;
const TEST_ENEMY_PRICE = 10;
const TEST_ENEMY_X = 0;
const TEST_ENEMY_Y = 0;
const TEST_ENEMY_SKIN = 0;
const TEST_ENEMY_CUR_CELL = 0;
const TEST_ENEMY_PATH = 0;
const TEST_ENEMY_PLAYER = 0;

let current_round = 0;
var id_timer_wave;
var id_timer_income;
var player_hp = 10;
var player_income = 100;
var player_money = 200;
var is_player_dead = false;
var count = 0;

function reload_player(){
	player_hp = 10;
 	player_income = 100;
 	player_money = 200;
 	is_player_dead = false;
}

function increase_money(){
	player_money += player_income;
}

function decrease_money(cost){
	player_money -= cost;
}

function is_gameover(){
	if (player_hp <= 0){
		is_player_dead = true;
		clearInterval(id_timer_income);
		clearInterval(id_timer_wave);
	}
	return is_player_dead;
} 

function start_round(){
	++current_round;
	is_gameover();
	console.log(player_income);
	console.log(player_money);
	console.log(current_round);
}

function start_game(number_of_players){		
	reload_player();
	id_timer_wave = setInterval(start_round, ROUND_DELAY);
	id_timer_income = setInterval(increase_money, INCOME_DELAY);
}

(function launch_game(){
	let game_field = document.getElementById("game_field");
	let map_builder = new MapBuilder(game_field);	
	map_builder.generate_sprites_block(5, 5, 10, 10, "sprites/towerDefense_tile002.png");
	start_game(1);
})() 



// function is_gameover(players, number_of_players){
// 	is_over = true;
// 	for (i = 0; i < number_of_players; ++i){
// 		if (!players[i].hp >= 0){
// 			is_over = false;
// 		}
// 	}
// 	return is_over;
// }

// function start_round(tower, number_of_tower){
// 	current_number_of_enemy = number_of_enemy;
// 	let enemy[];
// 	for (i = 0; i < number_of_enemy; ++i){
// 		enemy[i] = new Enemy(test_enemy_hp, test_enemy_speed, test_enemy_price, test_enemy_x, test_enemy_y, test_enemy_skin, test_enemy_cur_cell, test_enemy_path, test_enemy_player);
// 	}
// 	while (current_number_of_enemy != 0){
// 		for (i = 0; i < number_of_enemy; ++i)
// 			enemy[i].move(x,y);
// 		for (i = 0; i < number_of_tower; ++i)
// 			tower[i].attack(enemy, current_number_of_enemy);
// 	}
// }
