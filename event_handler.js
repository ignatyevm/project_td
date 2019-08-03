let radius;
let price;
let type;
let player;
let bot;
let chosen_number_of_players = 2;
let tower_info = document.getElementById('towerInfo');
let enemy_info = document.getElementById('enemyInfo');
var enemy_type = 1;
var tower_type = 1;

document.getElementById("create_session").addEventListener("click", ()=>{
	let menu = document.getElementById('main_menu');
	let canvas = document.getElementById('game field');
	menu.style.display = 'none';
	canvas.style.display = 'inline';
	game.create_session(map_drawer, objects_drawer, meta_drawer);
	game.session.set_map(MAP_WIDTH, MAP_HEIGHT, map_src);			
});

document.getElementById("bot_button").addEventListener("click", ()=>{
	let start_button = document.getElementById('start_bot_id');
	start_button.style.display = "none";
	player = game.session.add_player(2 * BLOCK_SIZE, 0);
	bot = game.session.add_player(21 * BLOCK_SIZE, 23 * BLOCK_SIZE);
	game.session.add_path(bot, player, PATH_FOUR_TO_ONE);
	game.session.add_path(player, bot, PATH_ONE_TO_FOUR);
	bot_action(bot, player);
	game.session.launch_session(BOT);
});

document.getElementById("local_button").addEventListener("click", ()=>{
	let start_button = document.getElementById('start_bot_id');
	start_button.style.display = "none";
	assign_playes(chosen_number_of_players);
	game.session.launch_session(LOCAL);
});


document.getElementById("tb1").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= BASIC_TOWER[3][0]){
		change_selected_object(true, false);
		radius = BASIC_TOWER[4][1];
		price = BASIC_TOWER[3][1];
		type = BASIC_TOWER;
	}
	tower_type = 1;
	write_tower_info(tower_type);
});

document.getElementById("tb2").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= MAGNIT_TOWER[3][0]){
		change_selected_object(true, false);
		radius = MAGNIT_TOWER[4][1];
		price = MAGNIT_TOWER[3][1];
		type = MAGNIT_TOWER;
	}
	tower_type = 2;
	write_tower_info(tower_type);
});

document.getElementById("tb3").addEventListener("click", ()=>{
	if (document.getElementById("player_budget").value >= BASIC_TOWER[3][0]){
		change_selected_object(true, false);
		radius = BASIC_TOWER[4][1];
		price = BASIC_TOWER[3][1];
		type = BASIC_TOWER;
	}
	tower_type = 3;
	write_tower_info(tower_type);
});

document.getElementById("eb1").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 1";
	enemy_type = 1;
	write_enemy_info(enemy_type)
});

document.getElementById("eb2").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 2";
	enemy_type = 2;
	write_enemy_info(enemy_type)
});

document.getElementById("eb3").addEventListener("click", ()=>{
	change_selected_object(false, true);
	enemyInfo.value = "enemy 3";
	enemy_type = 3;
	write_enemy_info(enemy_type)
});

document.getElementById("sell").addEventListener("click", ()=>{
	for (let i = 0; i < game.session.towers.length; i++){
		let t = game.session.towers[i];
		if (t.clicked && t.player == game.session.players[game.session.personal_id]){
			game.session.towers.splice(i, 1);
			delete_tower(t.x, t.y);
			on_player_add_money(game.session.players[game.session.personal_id], t.price, game.session.personal_id);
			t.clicked = false;
		}
	}
});

document.getElementById("tower_upgrade").addEventListener("click", ()=>{
	for (let i = 0; i < game.session.towers.length; i++){
		let t = game.session.towers[i];
		if (t.clicked  && document.getElementById("player_budget").value >= t.price
			&& t.player == game.session.players[game.session.personal_id]){
			t.lvl++;
			t.set_properties();
			objects_drawer.clear();	
			game.session.render_tower();
			on_player_spend_money(game.session.players[game.session.personal_id], t.price, game.session.personal_id)
		}
		t.clicked = false;
	}
});


function on_enemy_in_base(player, enemy, personal_id){
	player.take_damage(enemy.damage);
	if (player.id == personal_id){
		let health_bar = document.getElementById('player_hp');
		health_bar.innerText = player.base_hp;
	}
}

function on_base_destroyed(player){
	player.set_state(DEAD); 
}

function on_player_add_money(player, money, personal_id){
	player.add_money(money);
	if (personal_id == player.id){
		let money_bar = document.getElementById('player_budget');
		money_bar.innerText = player.money;
	}
}

function on_player_spend_money(player, money, personal_id){
	if (player.money < money)
		return false;
	player.remove_money(money);
	if (player.id === personal_id){
		let money_bar = document.getElementById('player_budget');
		money_bar.innerText = player.money;
	}
	return true;
}

function on_player_change_turn(personal_id, players){
	let health_bar = document.getElementById('player_hp');
	let money_bar = document.getElementById('player_budget');
	health_bar.innerText = players[personal_id].base_hp;
	money_bar.innerText = players[personal_id].money;
}

function assign_playes(number_of_players) {
	for (let i = 0; i < number_of_players; ++i){
		let player = game.session.add_player(BASES[i][0], BASES[i][1]);
	}
	let path_index = 0;
	for (let i = 0; i < number_of_players; ++i){
		let source_player = game.session.players[i];
		for (let j = 0; j < number_of_players; ++j){
			if (i == j){
				continue;
			}
			let target_player = game.session.players[j];
			game.session.add_path(source_player, target_player, PATHS[path_index++]);
		}
	}
}

function change_selected_object(select1, select2) {
	is_tower_chosen = select1;
	is_enemy_chosen = select2;
	for (t of game.session.towers){
		t.clicked = false;
	}
}

function write_tower_info(tower_type){
	let meta_image = new Image();
	let image = document.getElementById('towerInfo');
	switch(tower_type){
			case 1: meta_image.src = 'sprites/mars/map_sprites/characteristics_of_towers/basic.png';
					break;
			case 2: meta_image.src = 'sprites/mars/map_sprites/characteristics_of_towers/magnet.png';
					break;
			case 3: meta_image.src = 'sprites/mars/map_sprites/characteristics_of_towers/aoe.png';
					break;
		}
	image.src = meta_image.src;
}

function write_enemy_info(enemy_type){
	let meta_image = new Image();
	let image = document.getElementById('enemyInfo');
	switch(enemy_type){
			case 1: meta_image.src = 'sprites/mars/map_sprites/characteristics_of_enemies/basic.png';
					break;
			case 2: meta_image.src = 'sprites/mars/map_sprites/characteristics_of_enemies/ant.png';
					break;
			case 3: meta_image.src = 'sprites/mars/map_sprites/characteristics_of_enemies/bugboi.png';
					break;
		}
	image.src = meta_image.src;
}