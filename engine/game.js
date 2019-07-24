const number_of_enemy = 1;
const round_delay = 60000;
const start_player_hp = 20;
const start_player_money = 200;

const test_enemy_hp = 500;
const test_enemy_speed = 10;
const test_enemy_price = 10;
const test_enemy_x = 0;
const test_enemy_y = 0;
const test_enemy_skin = 0;
const test_enemy_cur_cell = 0;
const test_enemy_path = 0;
const test_enemy_player = 0;

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

// function start_game(number_of_players){
// 	draw();
// 	let players[number_of_players];
// 	let tower[];
// 	is_round_started = false
// 	for (i = 0; i < number_of_players; ++i)
// 		players[i] = new Player(start_player_hp, start_player_money);
// 	while (is_gameover(players)){
// 		setTimeout(start_round, round_delay);
// 	}

// }

(function launch_game(){

	let game_field = document.getElementById("game_field");
	let map_builder = new MapBuilder(game_field);
	map_builder.generate_sprites_block(0, 0, MAP_WIDTH, MAP_HEIGHT, "sprites/towerDefense_tile002.png");
	//start_game(1);
})() 