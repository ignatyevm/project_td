
class GameSession {

	constructor(map_drawer, objects_drawer, meta_drawer) {
		this.map_drawer = map_drawer;
		this.objects_drawer = objects_drawer;
		this.meta_drawer = meta_drawer;

		this.enemies_id = 0;
		this.players_id = 0;
		this.interval_id;

		this.game_state = BUILDING;
		this.build_counter = BUILD_SECONDS;

		this.active_enemy = 0;
		this.players_make_turn = 1;

		this.enemies = [];
		this.towers = [];
		this.players = [];

		this.is_interval_launch = false;

		this.paths = new Array(MAX_ACTIVE_PLAYERS);

		for(let i = 0; i < MAX_ACTIVE_PLAYERS; ++i){
			this.paths[i] = new Array(MAX_ACTIVE_PLAYERS);
		}
	}

	launch_session(type){
		this.set_personal_id(0);
		this.render_map();
		this.game_type = type;
		this.make_turn();
	}

	launch_timer(){
		if (this.is_gameover()){
			let index = -1;
			for (let i = 0; i < this.players.length; ++i){
				if (!this.players[i].is_dead())
					index = i;
			}
			if (index >= 0)
				alert("Player " + PLAYER_COLORS[index] + " has won!");
			else 
				alert("DRAW");
			return;
		}
		alert_player_turn(this.personal_id);
		this.interval_id = window.setInterval(()=>{
			--this.build_counter;
			timer.value = this.build_counter;
			if (this.build_counter == 0){
				if (this.game_type == BOT){
					bot_spawn_enemy(bot, player);
				}
				if (this.players_make_turn < this.players.length && this.game_type == LOCAL) {					
					this.change_player();
					alert_player_turn(this.personal_id);
					++this.players_make_turn;
					this.build_counter = BUILD_SECONDS;
				}
				else {
					if (this.game_type == LOCAL) {
						this.change_player();
					}
					this.change_state(WAR);
					this.is_interval_launch = false;
					this.active_enemy = 0;
					this.players_make_turn = 1;
					window.clearInterval(this.interval_id);
					this.make_turn();
				}
			}
		}, 1000);
	}

	change_state(state) {
		this.game_state = state;
		if (this.game_state == BUILDING)
			enable_buttons();
		else
			disable_buttons();
	}

	launch_animation(){
		this.interval_id = setInterval(()=>{
			this.move_objects();
			this.draw_objects();
			++frames;

			for (let tower of this.towers){
				if(tower.selected) tower.draw_radius();
			}

			if (this.enemies.length == 0){

				this.objects_drawer.clear();
				for (let tower of this.towers){
					tower.clear_bullets();
					tower.render();
					console.log(tower.selected);
				}
				
				this.is_interval_launch = false;
				this.change_state(BUILDING);			
				clearInterval(this.interval_id);
				this.make_turn();
			}
		}, 20);
	}

	start_building_phase(){
		this.build_counter = BUILD_SECONDS;
		if (!this.is_interval_launch){
			start_radius_interval();
			this.launch_timer();
			this.is_interval_launch = true;
			frames = 0;
		}
	}

	start_war_phase(){
		if (!this.is_interval_launch){ 
			clear_interval_radius();
			this.launch_animation();
			this.is_interval_launch = true;
		}
	}

	make_turn(type){
		if (this.game_state == BUILDING) {
			this.start_building_phase();
		}
		else {
			this.start_war_phase();
		}
		if (this.is_gameover()){
			clearInterval(this.session_intervar);
		}
	}

	move_objects() {
		
		if (this.active_enemy != this.enemies.length && frames % 81 == 0){
			this.enemies[this.active_enemy].set_frame(frames);
			++this.active_enemy;

		}

		for(let i = this.active_enemy - 1; i >= 0; --i) {
			let enemy = this.enemies[i];
			let target_index = enemy.target.id;
			if (!enemy.is_alive()){
				on_player_add_money(this.players[target_index], enemy.price * 2, this.personal_id);
				--this.active_enemy;
				this.enemies.splice(i, 1);
			}
			if (enemy.is_arrive()) {
				on_enemy_in_base(this.players[target_index], enemy, this.personal_id);
				if (this.players[target_index].is_dead()){
					on_base_destroyed(this.players[target_index]);
				}
				--this.active_enemy;
				this.enemies.splice(i, 1);
			}
			enemy.move();
		}

		for(let tower of this.towers) {
			for(let i = 0; i < this.enemies.length; i++) {
				let enemy = this.enemies[i];

				if (tower.player.id != enemy.target.id)
					continue;

				if (is_in_radius(tower, enemy, tower.radius)) {

					if (tower.targets_set[enemy.id] === undefined) {
						tower.targets_queue.push(enemy);
						tower.targets_set[enemy.id] = true;
					}

				}
				else{

					if(tower.targets_set[enemy.id] === true) {
						tower.targets_queue.shift();
						tower.targets_set[enemy.id] = false;
						if(tower instanceof MagnetTower){
							tower.has_target = false;
							enemy.speed = tower.target_original_speed;
						}
					}
				}
			}

			if (tower.targets_queue.length > 0) {
				let target = tower.targets_queue[0];
				tower.target = target;
				tower.fire(target);
				tower.rotation_angle = get_rotation_angel(tower, target);
			}else{
				tower.target = null;
			}
			tower.move_bullets();
		}
	}

	draw_objects(){
		this.objects_drawer.clear();
		this.meta_drawer.clear();

		for (let i = 0; i < this.active_enemy; ++i){
			let enemy = this.enemies[i];
			if (enemy.point[2] == -1) enemy.render_rotated(-90); 
			if (enemy.point[2] == 1) enemy.render_rotated(90); 
			if (enemy.point[3] == 1) enemy.render_rotated(-180); 
			if (enemy.point[3] == -1) enemy.render_rotated(0);
		}

		this.render_tower();
	}

	render_tower(){
		for (let tower of this.towers){
			if (tower.clicked){
				tower.to_highlight(tower.x, tower.y, SPRITE_WIDTH, SPRITE_HEIGHT);
			}
			for (let bullet of tower.bullets){
				bullet.render();
			}
			tower.render();
		}	
	}

	spawn_enemy(source_player, target_player, type) {
		let target_path = this.paths[source_player.id][target_player.id];
		let enemy;
		switch(type){
			case 1: enemy = new Enemy(source_player.base_x, source_player.base_y, source_player, target_player, objects_drawer);;
					break;
			case 2: enemy = new AntEnemy(source_player.base_x, source_player.base_y, source_player, target_player, objects_drawer);
					break;
			case 3: enemy = new BigboyEnemy(source_player.base_x, source_player.base_y, source_player, target_player, objects_drawer);
					break;
		}

		this.enemies_id = (this.enemies_id + 1) % MAX_ACTIVE_ENEMIES;
		enemy.set_path(target_path, target_path.length - 1);
		enemy.set_properties(this.enemies_id);
		let is_able = on_player_spend_money(source_player, enemy.price, this.personal_id);
		if (is_able == true) {
			this.enemies.push(enemy);
		}
	}

	build_tower(x, y, player, type) {
		let tower;
		switch(type){
			case 1: tower = new Tower(x, y, player, this.objects_drawer, this.meta_drawer, type);
					break;
			case 2: tower = new MagnetTower(x, y, player, this.objects_drawer, this.meta_drawer, type);
					break;
			case 3: tower = new AOETower(x, y, player, this.objects_drawer, this.meta_drawer, type);
					break;
		}

		tower.set_properties();
		let is_able = on_player_spend_money(player, tower.price, this.personal_id);
		if (is_able == true){
			this.towers.push(tower);
		}
	}

	change_player(){
		this.personal_id = (this.personal_id + 1) % this.players.length;
		on_player_change_turn(this.personal_id, this.players);
	}

	add_player(base_x, base_y){
		let player = new Player(this.players_id++, base_x, base_y);
		player.set_hp(START_PLAYER_HP);
		player.set_money(START_PLAYER_MONEY);
		player.set_state(ALIVE);
		this.players.push(player);
		return player;
	}

	add_path(from_player, to_player, path){
		this.paths[from_player.id][to_player.id] = path;
	}

	set_personal_id(id) {
		this.personal_id = id;
	}

	set_map(width, height, map_src) {
		this.map = new GameMap(width, height, map_src, this.map_drawer);
	}

	render_map() {
		this.map.render();
	}

	is_gameover() {
		let count = 0;
		let index = 0;
		for (let player of this.players){
			if (!player.is_dead())
				++count;
		}
		if (count > 1)
			return false;
		return true;
	}

}