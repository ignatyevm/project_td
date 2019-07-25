//game state
const finished = 2;
const started = 1;
const in_lobby = 0;


//
const MAX_PLAYER_MONEY = 99999;
const START_PLAYER_HP = 10;
const START_PLAYER_MONEY = 200;

//temp const
const TEST_ENEMY_HP = 500;
const TEST_ENEMY_SPEED = 10;
const TEST_ENEMY_PRICE = 10;
const TEST_ENEMY_X = 0;
const TEST_ENEMY_Y = 0;
const TEST_ENEMY_SKIN = 0;
const TEST_ENEMY_CUR_CELL = 0;
const TEST_ENEMY_PATH = 0;

// let game_state = 0;
// let enemy = [];
// let player = [];
// let current_round = 0;
// let id_timer_round;
// let id_timer_income;

// class Lobby{
// 	constructor(max_players){
// 		this.game_state = in_lobby;
// 		this.number_of_players = 1;
// 		this.max_players = max_players;
// 	}
// 	add_player(){
// 		if (max_players > number_of_players)
// 			++number_of_players;
// 		else
// 			alert("Lobby full");
// 	}
// 	del_player(){
// 		if (number_of_players > 1)
// 			--number_of_players;
// 		else
// 			alert("You last");
// 	}
// 	add_bot(){
// 	}
// 	del_lobby(){
// 	}
// 	start_lobby(){
// 		game_state = started;
// 	}
// }


class session{
	constructor(player_number){
		this.player = [];
		this.enemy = [];
		this.round = 1;
		this.enemy_number = 1;
		this.active_enemy = 0;
		for (i = 0; i < player_number; ++i){
			this.player.push(new Player(START_PLAYER_HP, START_PLAYER_MONEY))
		}
	}

	add_enemy(){
		for (i = 0; i < this.player.length * this.round; ++i){
			this.enemy.push(new Enemy(TEST_ENEMY_HP, TEST_ENEMY_SPEED, TEST_ENEMY_PRICE, TEST_ENEMY_X, TEST_ENEMY_Y, TEST_ENEMY_SKIN, TEST_ENEMY_PATH));
		}
	}

	spawn_enemy(){
		
	}

	make_turn(){
		++round;
		if (this.enemy.length == 0){
			this.add_enemy();
		}
		for (i = 0; i < this.active_enemy; ++i){

		}

	}
}



// Обработка шага
// 
// 
// 

// function end_game(){
// 	clearInterval(id_timer_income);
// 	clearInterval(id_timer_round);
// }
	
// function is_gameover(){
// 	if (player[0].is_dead){
// 		end_game();
// 	}
// 	return player[0].is_dead;
// }

// function start_round(){
// 	if (enemy.length > 0){
// 		//delete
// 		enemy.splice(0,1);
// 		//upper
// 		set_game_state();
// 		return;
// 	}
// 	else if (game_state == 1){
// 		set_game_state();
// 		return;
// 	}
// 	if (is_gameover())
// 		return;
// 	++current_round;
// 	player[0].get_damage();
// 	console.log(player[0].income);
// 	console.log(player[0].money);
// 	console.log(current_round);
// }

// function start_game(number_of_players){		
// 	for (i = 0; i < number_of_players; ++i){
// 		player.push(new Player(START_PLAYER_HP, START_PLAYER_MONEY, START_PLAYER_INCOME));
// 	}
// 	set_game_state();
// 	id_timer_income = setInterval(add_money_to_players, INCOME_DELAY);
// 	id_timer_round = setInterval(start_round, ROUND_DELAY);
// }

// function add_money_to_players(){
// 	for (i = 0; i < player.length; ++i){
// 		player[i].increase_money();
// 	}
// }

// function add_enemy(number){
// 	for (i = 0; i < number; ++i){
// 		enemy.push(new Enemy(TEST_ENEMY_HP, TEST_ENEMY_SPEED, TEST_ENEMY_PRICE, TEST_ENEMY_X, TEST_ENEMY_Y, TEST_ENEMY_SKIN, TEST_ENEMY_PATH));
// 	}
// }

// (function launch_game(){
// 	render_map(field_url);
// 	let image = new Image();
// 	let pos = new ObjectPosition(0, 20);
// 	image.src = test_object;
// 	let object = new GameObject(pos, image);
// 	objects.push(object);
// 	id_timer = setInterval(function(){for (i = 0; i < objects.length; ++i){objects[i].translate_pos(1, 0);};
// 									  render_objects(objects);} , 30)
// 	//start_game(1);
// })()