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
	let map = new Map(game_field, "");
	map.render();

})() 
