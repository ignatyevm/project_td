const NUMBER_OF_ENEMY = 3;
const ROUND_DELAY = 1000;
const INCOME_DELAY = 1000;
const MAX_PLAYER_MONEY = 99999;
const START_PLAYER_HP = 10;
const START_PLAYER_MONEY = 200;
const START_PLAYER_INCOME = 100;

//temp const
const TEST_ENEMY_HP = 500;
const TEST_ENEMY_SPEED = 10;
const TEST_ENEMY_PRICE = 10;
const TEST_ENEMY_X = 0;
const TEST_ENEMY_Y = 0;
const TEST_ENEMY_SKIN = 0;
const TEST_ENEMY_CUR_CELL = 0;
const TEST_ENEMY_PATH = 0;

let game_state = 0;
let enemy = [];
let player = [];
let current_round = 0;
let id_timer_round;
let id_timer_income;

var canvas = document.getElementById('game_field');
var ctx = canvas.getContext('2d');
var objects = [];
var field_url = "maps/map_4.png";
var test_object = "sprites/towerDefense_tile271.png"



function set_game_state(){
	if (enemy.length != 0)
		game_state = 1;
	else if (enemy.length == 0)
		game_state = 2;
}

function end_game(){
	clearInterval(id_timer_income);
	clearInterval(id_timer_round);
}
	
function is_gameover(){
	if (player[0].is_dead){
		end_game();
	}
	return player[0].is_dead;
}

function start_round(){
	if (enemy.length > 0){
		//delete
		enemy.splice(0,1);
		//upper
		set_game_state();
		return;
	}
	else if (game_state == 1){
		set_game_state();
		return;
	}
	if (is_gameover())
		return;
	++current_round;
	player[0].get_damage();
	console.log(player[0].income);
	console.log(player[0].money);
	console.log(current_round);
}

function start_game(number_of_players){		
	for (i = 0; i < number_of_players; ++i){
		player.push(new Player(START_PLAYER_HP, START_PLAYER_MONEY, START_PLAYER_INCOME));
	}
	set_game_state();
	id_timer_income = setInterval(add_money_to_players, INCOME_DELAY);
	id_timer_round = setInterval(start_round, ROUND_DELAY);
}

function add_money_to_players(){
	for (i = 0; i < player.length; ++i){
		player[i].increase_money();
	}
}

function add_enemy(number){
	for (i = 0; i < number; ++i){
		enemy.push(new Enemy(TEST_ENEMY_HP, TEST_ENEMY_SPEED, TEST_ENEMY_PRICE, TEST_ENEMY_X, TEST_ENEMY_Y, TEST_ENEMY_SKIN, TEST_ENEMY_PATH));
	}
}

(function launch_game(){
	render_map(field_url);
	let image = new Image();
	let pos = new ObjectPosition(0, 20);
	image.src = test_object;
	let object = new GameObject(pos, image);
	objects.push(object);
	id_timer = setInterval(function(){for (i = 0; i < objects.length; ++i){objects[i].translate_pos(1, 0);};
									  render_objects(objects);} , 30)
	//start_game(1);
})()